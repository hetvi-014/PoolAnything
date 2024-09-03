// routes/rideRoutes.js
const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");

// Create ride route
router.post("/create", rideController.createRide);

// View rides route
router.get("/view", rideController.viewRides);

// Book ride route
router.post("/book/:rideId", rideController.bookRide);

module.exports = router;
