const mongoose = require("mongoose")

const galerySchema = mongoose.Schema({
	Image: String
})

module.exports = mongoose.model("Gallery", galerySchema)