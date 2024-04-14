const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/registration", async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = User.findOne({ email });

        if (userExist) {
            return res
                .status(400)
                .json({ message: `User with email ${email} already exist` });
        }
        const hashPassword = bcrypt.hash(password, 15);
        const user = new User({ email, password: hashPassword });
        await user.save();

        return res.json({message: "User was created"});
    } catch (e) {
        
    }
});
