// index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Ride = require("./models/Ride");

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/auth", (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

app.post("/rides", async (req, res) => {
  try {
    const {
      origin,
      destination,
      date,
      time,
      availableSeats,
      driver,
      user_name,
      price,
    } = req.body;
    const newRide = new Ride({
      origin,
      destination,
      date: new Date(date),
      time,
      availableSeats,
      driver, // Set the driver to the authenticated user's ID
      user_name,
      price,
    });
    await newRide.save();
    res
      .status(201)
      .json({ message: "Ride created successfully", ride: newRide });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/rides", async (req, res) => {
  try {
    const rides = await Ride.find().populate("driver", "name email"); // Populate driver details
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/rides/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const rides = await Ride.find({ user_name: userId }).populate(
      "driver",
      "name email"
    ); // Populate driver details
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Define a GET endpoint to fetch rides based on specified criteria
app.get("/search/rides", async (req, res) => {
  try {
    // Extract query parameters from the request
    console.log(req.query);
    const { origin, destination, date, availableSeats } = req.query;

    // Construct the query object based on provided parameters
    const query = {};
    if (origin) query.origin = origin;
    if (destination) query.destination = destination;
    if (date) {
      // Assuming date is in ISO format (e.g., "2024-03-17")
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1); // Increase the date by 1 to consider rides on the entire day
      query.date = { $gte: startDate, $lt: endDate };
    }
    if (availableSeats) query.availableSeats = { $gte: availableSeats }; // Find rides with available seats greater than or equal to the specified value

    // Fetch rides based on the constructed query
    const rides = await Ride.find(query);

    // Return the fetched rides as JSON response
    res.status(200).json(rides);
  } catch (error) {
    // Handle errors
    console.error("Error fetching rides:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API to get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.deleteOne({ _id: req.params.id });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pruthvikmatrawadiya41:1234567890@newc.pimmnlw.mongodb.net/?retryWrites=true&w=majority&appName=newC",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
