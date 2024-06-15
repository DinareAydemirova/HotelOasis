const mongoose = require("mongoose")

const menuSchema = mongoose.Schema({
	image: { type: String, required: true },
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
})

module.exports = mongoose.model("Menu", menuSchema)