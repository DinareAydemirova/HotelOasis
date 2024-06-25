const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
	checkIn: {type: Date, require:true},
    checkOut: {type: Date, require:true},
    email:{type: String, require:true},
    cardNumber: { type: Number, required: true },
    validThrough:{ type: Date, required: true },
    cvc:{type: Number, required: true}
})

module.exports = mongoose.model("Booking", bookingSchema)