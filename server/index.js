const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");
const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoUrl"));

        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    } catch (e) {}
};

start();
