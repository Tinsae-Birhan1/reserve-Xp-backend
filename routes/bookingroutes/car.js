const express = require('express');
const router = express.Router();
const Car = require('../../models/carModels');
const bookingCarController = require('../../controllers/Booking/bookingCarController');

// GET all Bookings
router.get("/", bookingCarController.getAllBookings);

// GET a single booking by ID
router.get("/:id", bookingCarController.getBookingById);

// CREATE a new booking for room
router.post("/", bookingCarController.createBooking);

// UPDATE a booking by ID
router.put("/:id", bookingCarController.updateBookingById);

// DELETE a booking by ID
router.delete("/:id", bookingCarController.deleteBookingById);

module.exports = router;
