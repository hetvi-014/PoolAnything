// controllers/rideController.js
const Ride = require("../models/Ride");

exports.createRide = async (req, res) => {
  try {
    const { origin, destination, date, time, availableSeats } = req.body;
    const newRide = new Ride({
      origin,
      destination,
      date,
      time,
      availableSeats,
      driver: req.userId, // Assuming userId is attached to the request after authentication
    });
    await newRide.save();
    res.status(201).json({ message: "Ride created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.viewRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json({ rides });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bookRide = async (req, res) => {
  try {
    const { rideId } = req.params;
    const ride = await Ride.findById(rideId);
    if (!ride) {
      return res.status(404).json({ message: "Ride not found" });
    }
    if (ride.availableSeats === 0) {
      return res.status(400).json({ message: "No available seats" });
    }
    ride.bookedSeats++;
    ride.availableSeats--;
    await ride.save();
    res.status(200).json({ message: "Ride booked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
