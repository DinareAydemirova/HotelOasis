const express = require("express")
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/userController")
const { verifyAccess } = require("../middleware/authMiddleware")

const UserRouter = express.Router()

UserRouter.get("/", getAllUsers)
UserRouter.get("/:id", getUserById)
UserRouter.post("/", verifyAccess(["Admin","User"]), createUser)
UserRouter.put("/:id", verifyAccess(["Admin"]), updateUser);
UserRouter.delete("/:id", verifyAccess(["Admin"]), deleteUser);

module.exports = UserRouter