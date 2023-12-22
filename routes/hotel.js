const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController.js');


// GET all hotels
router.get("/hotels", hotelController.getAllHotels);

// GET a single hotel by ID
router.get("/hotels/:id", hotelController.getHotelById);

// CREATE a new hotel
router.post("/hotels", hotelController.createHotel);

// UPDATE a hotel by ID
router.put("/hotels/:id", hotelController.updateHotelById);

// DELETE a hotel by ID
router.delete("/hotels/:id", hotelController.deleteHotelById);

module.exports = router;
