const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const AllUsers = await UserModel.find({});
    res.status(200).json(AllUsers);
  } catch (error) {
    res.status(500).json({ message: "Users are not found" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const decoded = req.decoded;
    const user = await UserModel.findById(id);
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const newUser = UserModel({ email, password, firstName, lastName });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.status(500).json("User is not created!");
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndDelete(id);
  res.send(user);
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { role },
      { new: true } 
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};



module.exports = { getAllUsers, getUserById, createUser, deleteUser, updateUser };
