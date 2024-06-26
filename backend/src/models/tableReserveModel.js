const mongoose = require("mongoose")

const reserveSchema = mongoose.Schema({
    day:{ type: String, required: true },
    time: { type: String, required: true },
    email: { type:String, required: true },
    people: { type: Number, required: true },
})

module.exports = mongoose.model("Reserve", reserveSchema)