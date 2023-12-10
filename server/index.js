const express = require("express");
const config = require("config");
const userRouter = require("./routes/userRoutes");
const PORT = config.get("serverPort");

const app = express();
app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
