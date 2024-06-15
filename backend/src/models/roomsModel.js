const mongoose = require("mongoose");

const roomsSchema = mongoose.Schema({
  images: [String],
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  people: { type: Number, required: true },
  rate: { type: Number, required: true },
});

module.exports = mongoose.model("Room", roomsSchema);
