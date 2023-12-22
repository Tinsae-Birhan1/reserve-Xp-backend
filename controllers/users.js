require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("../models/users"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens

const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

// Signup route to create a new user
// controllers/User.js

// controllers/User.js

router.post("/signup", async (req, res) => {
    try {
      // hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
  
      // Set the status to 'pending' for vendors
      const status = req.body.role === 'vendor' ? 'pending' : 'active';
  
      // create a new user with role and status
      const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        status,
      });
  
      // send new user as response
      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  

  // controllers/User.js

router.patch("/updateStatus/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: { status } },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
  
      res.status(200).json({
        user: updatedUser,
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
  
  

// Login route to verify a user and get a token
// controllers/User.js

router.post("/login", async (req, res) => {
    try {
      // check if the user exists
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        // check if password matches
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          // check if the role matches
          if (req.body.role && user.role !== req.body.role) {
            res.status(403).json({ error: "Access denied. Invalid role." });
          } else {
            // sign token and send it in response
            const token = await jwt.sign({ username: user.username, role: user.role }, SECRET);
            res.json({ token });
          }
        } else {
          res.status(400).json({ error: "Password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  });


 // Get user profile by ID
router.get("/profile/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      // Verifying if the user exists in the database
      const user = await User.findOne({ _id: id });
  
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      } else {
        return res.status(200).json({
          user,
          success: true,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });

  
  // Get all users
// Get all users
router.get("/all/users", async (req, res) => {
    try {
      // Fetch all users from the database (excluding vendors)
      const allUsers = await User.find({ role: 'user' });
  
      return res.status(200).json({
        users: allUsers,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
  
  
  // Get all vendors
  router.get("/all/vendors", async (req, res) => {
    try {
      // Assuming there's a 'role' field in your User model that distinguishes vendors
      const allVendors = await User.find({ role: 'vendor' });
  
      return res.status(200).json({
        vendors: allVendors,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
  

module.exports = router