const express = require("express");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("server start on port", PORT);
        });
    } catch {}
};

start();
