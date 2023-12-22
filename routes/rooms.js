const express = require('express');
const router = express.Router();
const Room = require('../models/spaceModels'); 

router.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    console.log("Debug: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

// GET a single room by ID
router.get("/rooms/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json(room);
  } catch (error) {
    console.log("Debug: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

// CREATE a new room
router.post("/rooms", async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(201).json(newRoom);
  } catch (error) {
    console.log("Debug: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a room by ID

router.put("/rooms/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    console.log("Debug: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

// DELETE a room by ID

router.delete("/rooms/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoom = await Room.findByIdAndDelete(id);

    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.log("Debug: " + error.message);
    res.status(500).json({ message: error.message });
  }
});
