const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    roomid:{type:String, required:true},
	checkIn: {type: Date, require:true},
    checkOut: {type: Date, require:true},
    totalAmount:{type:Number, required:true},
    status:{type:String, required:true , default:"Booked"},
})

module.exports = mongoose.model("Booking", bookingSchema)