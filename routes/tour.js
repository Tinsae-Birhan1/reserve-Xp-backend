const express = require('express');
const router = express.Router();
const Tour = require('../models/spaceModels'); 

app.get("/tour", async (req, res) => {
    try {
        const newTour = await Tour.find({});
        res.status(200).json(newTour);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get("/tour/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const tour = await Tour.findById(id);

        if (!tour) {
            return res.status(404).json({ message: "Tour not found" });
        }

        res.status(200).json(tour);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post("/tour", async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(200).json(newTour);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});