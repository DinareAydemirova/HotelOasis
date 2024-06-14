const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({
	image: String,
    fullname: String,
    age: Number,
    email:String,
    phone: String,
    position: String
})

module.exports = mongoose.model("Team", teamSchema)