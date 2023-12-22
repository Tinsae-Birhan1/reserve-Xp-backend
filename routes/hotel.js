const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotelModels'); 


router.get("/hotel", async (req, res) => {
    console.log("Debugging /hotel GET route");
    try {
        const newHotels = await Hotel.find({});
        res.status(200).json(newHotels);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.get("/hotel/:id", async (req, res) => {
    console.log("Debugging /hotel/:id GET route");
    try {
        const { id } = req.params;

        // Use the id parameter to find a single hotel by its ID
        const hotel = await Hotel.findById(id);

        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        res.status(200).json(hotel);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.post("/hotel", async (req, res) => {
    console.log("Debugging /hotel POST route");
    try {
        const newHotel = await Hotel.create(req.body);
        res.status(200).json(newHotel);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
