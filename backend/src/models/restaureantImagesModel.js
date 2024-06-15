const mongoose = require("mongoose")

const galeryOfRestaureantSchema = mongoose.Schema({
	image: String
})

module.exports = mongoose.model("Restaurant", galeryOfRestaureantSchema)