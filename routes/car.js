const express = require('express');
const router = express.Router();
const Car = require('../models/flightModels');


router.get("/cars", async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (error) {
        console.log("Error in GET /cars:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single car by ID
router.get("/cars/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);

        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(car);
    } catch (error) {
        console.log("Error in GET /cars/:id:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new car
router.post("/cars", async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        console.log("Error in POST /cars:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a car by ID
router.delete("/cars/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);

        if (!deletedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        console.log("Error in DELETE /cars/:id:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a car by ID
router.put("/cars/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(updatedCar);
    } catch (error) {
        console.log("Error in PUT /cars/:id:", error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

