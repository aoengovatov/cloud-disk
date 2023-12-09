const Router = require("express");
const router = new Router();
const userController = require("../controller/userController");

router.post("/user", userController.createUser);

module.exports = router;
