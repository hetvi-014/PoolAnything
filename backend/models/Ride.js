// models/Ride.js
const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  bookedSeats: { type: Number, default: 0 },
  driver: { type: String, required: true },
  price: { type: String, required: false },
  user_name: { type: String, required: true },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
