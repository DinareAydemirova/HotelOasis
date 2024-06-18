const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Users not found", error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const obj = req.body;
    const newUser = new User(obj);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "User not created", error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const decoded = req.decoded;

  const { email, firstName, lastName, role } = req.body;

  const update = {
    email,
    firstName,
    lastName,
    role,
  };

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (decoded.email !== user.email && decoded.role === "User") {
      return res.status(403).json({ message: "You don't have access" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, update, { new: true });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};

module.exports = { getAllUsers, getUserById, createUser, deleteUserById, updateUser };
