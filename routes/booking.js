const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController.js');

// GET all Bookings
router.get("/bookings", bookingController.getAllBookings);

// GET a single booking by ID
router.get("/bookings/:id", bookingController.getBookingById);

// CREATE a new booking
router.post("/bookings", bookingController.createBooking);

// UPDATE a booking by ID
router.put("/bookings/:id", bookingController.updateBookingById);

// DELETE a booking by ID
router.delete("/bookings/:id", bookingController.deleteBookingById);

module.exports = router;
