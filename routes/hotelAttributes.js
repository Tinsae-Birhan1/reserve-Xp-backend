const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController.js');


// GET all hotel attributes
router.get("/hotelattributes", hotelController.getAllHotels);

// GET a single hotel attribute by ID
router.get("/hotelattributes/:id", hotelController.getHotelById);

// CREATE a new hotel attribute
router.post("/hotelattributes", hotelController.createHotel);

// UPDATE a hotel attribute by ID
router.put("/hotelattributes/:id", hotelController.updateHotelById);

// DELETE a hotel attribute by ID
router.delete("/hotelattributes/:id", hotelController.deleteHotelById);

module.exports = router;
