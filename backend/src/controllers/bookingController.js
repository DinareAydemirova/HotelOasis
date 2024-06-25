const Booking= require("../models/bookingModel")

const getAllBookings=async (req, res) => {
	try {
        const booking = await Booking.find()
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postBooking=async (req, res) => {
	try {
        const obj=req.body
        const newBooking=await Booking(obj)
        newBooking.save()
        res.status(201).send(newBooking);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getBookingById=async (req, res) => {
	try {
        const booking=await Booking.findById(req.params.id)
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteBookingById=async (req, res) => {
	try {
        const booking=await Booking.findByIdAndDelete(req.params.id)
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgBookingId = async (req, res) => {
    try {
      const booking=await Booking.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(booking);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putBookingById = async (req, res) => {
    try {
      const booking=await Booking.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(booking);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllBookings, postBooking,getBookingById, deleteBookingById, patchgBookingId, putBookingById}