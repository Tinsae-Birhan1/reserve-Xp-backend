const express = require('express');
const router = express.Router();
const Flight = require('../models/flightModels'); // Adjust the path accordingly

// GET all Flight
router.get("/flights", async (req, res) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET a single flight by ID
router.get("/flights/:id", async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// CREATE a new flight
router.post("/flights", async (req, res) => {
    try {
        const flight = await Flight.create(req.body);
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// UPDATE a flight by ID
router.put("/flights/:id", async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE a flight by ID
router.delete("/flights/:id", async (req, res) => {
    try {
        await Flight.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
