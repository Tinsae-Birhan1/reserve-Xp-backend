const express = require('express');
const router = express.Router();
const Event = require('../models/flightModels');

router.get("/events", async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        console.log("Debug: " + error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new event
router.post("/events", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        console.log("Debug: " + error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single event by ID
router.get("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(event);
    } catch (error) {
        console.log("Debug: " + error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE an event by ID
router.put("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.log("Debug: " + error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE an event by ID
router.delete("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.log("Debug: " + error.message);
        res.status(500).json({ message: error.message });
    }
});
