const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const PORT = config.get("serverPort");

const app = express();
app.use(express.json());

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoUrl"));

        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    } catch (e) {}
};

start();
