const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const userMapper = require("../mappers/userMapper");
const { check, validationResult } = require("express-validator");
const router = new Router();
const fileService = require("../services/file.service");
const File = require("../models/File");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
    "/registration",
    [
        check("email", "Uncorrect email").isEmail(),
        check("password", "Password must be longer then 3 and shorter then 12").isLength({
            nim: 3,
            max: 12,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Uncorrest requests", errors });
        }

        try {
            const { email, password } = req.body;

            const userExist = await User.findOne({ email });

            if (userExist) {
                return res
                    .status(400)
                    .json({ message: `User with email ${email} already exist` });
            }

            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({ email, password: hashPassword });
            await user.save();
            await fileService.createDir(new File({ user: user.id, name: "" }));

            return res.json({ message: "User was created" });
        } catch (e) {
            return res.send({ message: "Server error" });
        }
    }
);

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(404).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
            expiresIn: "1h",
        });

        return res.json({
            token,
            user: userMapper(user),
        });
    } catch (e) {
        return res.send({ message: "Server error" });
    }
});

router.get("/auth", authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });

        const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
            expiresIn: "1h",
        });

        return res.json({
            token,
            user: userMapper(user),
        });
    } catch (e) {
        return res.send({ message: "Server error" });
    }
});

module.exports = router;
