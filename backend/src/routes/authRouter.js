const express = require("express");
const { loginController, registerController, resetPsswordController } = require("../controllers/authController");

const AuthRouter = express.Router();

AuthRouter.post("/login", loginController);
AuthRouter.post("/register", registerController);
AuthRouter.post("/reset-password", resetPsswordController);

module.exports = AuthRouter;
