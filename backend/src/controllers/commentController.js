const Comment = require("../models/commentModel");

const getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postComment = async (req, res) => {
  try {
    const obj = req.body;
    const newComment = new Comment(obj);
    await newComment.save();
    res.status(201).send(newComment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchgCommentId = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const putCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOneAndReplace(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllComments,
  postComment,
  getCommentById,
  deleteCommentById,
  patchgCommentId,
  putCommentById,
};
