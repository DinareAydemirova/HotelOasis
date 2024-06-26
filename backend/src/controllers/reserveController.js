const Reserve = require("../models/tableReserveModel");

const getAllReservations = async (req, res) => {
  try {
    const reserve = await Reserve.find();
    res.status(200).send(reserve);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postReservation = async (req, res) => {
  try {
    const obj = req.body;
    const newReservation = await Reserve(obj);
    newReservation.save();
    res.status(201).send(newReservation);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getReserveById = async (req, res) => {
  try {
    const reserve = await Reserve.findById(req.params.id);
    res.status(200).send(reserve);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReservationById = async (req, res) => {
  try {
    const reserve = await Reserve.findByIdAndDelete(req.params.id);
    res.status(200).send(reserve);
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchReserveById = async (req, res) => {
  try {
    const reserve = await Reserve.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(reserve);
  } catch (error) {
    res.status(400).send(error);
  }
};

const putReserveById = async (req, res) => {
  try {
    const reserve = await Reserve.findOneAndReplace({ _id: req.params.id }, req.body);
    res.status(200).send(reserve);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllReservations,
  postReservation,
  getReserveById,
  deleteReservationById,
  patchReserveById,
  putReserveById,
};
