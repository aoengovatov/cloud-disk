const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const router = new Router();

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

            const hashPassword = await bcrypt.hash(password, 15);
            const user = new User({ email, password: hashPassword });
            await user.save();

            return res.json({ message: "User was created" });
        } catch (e) {
            return res.send({ message: "Server error" });
        }
    }
);

module.exports = router;
