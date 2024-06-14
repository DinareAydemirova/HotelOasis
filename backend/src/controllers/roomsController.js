const Room= require("../models/roomsModel")

const getAllRooms=async (req, res) => {
	try {
        const room = await Room.find()
        res.status(200).send(room);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postRooms=async (req, res) => {
	try {
        const obj=req.body
        const newRoom=await Room(obj)
        newRoom.save()
        res.status(201).send(newRoom);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getRoomById=async (req, res) => {
	try {
        const room=await Room.findById(req.params.id)
        res.status(200).send(room);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteRoomById=async (req, res) => {
	try {
        const room=await Room.findByIdAndDelete(req.params.id)
        res.status(200).send(room);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchRoomId = async (req, res) => {
    try {
      const room=await Room.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(room);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putRoomById = async (req, res) => {
    try {
      const room=await Room.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(room);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllRooms, postRooms,getRoomById, deleteRoomById, patchRoomId, putRoomById}