const express = require('express');
const router = express.Router();
const Room = require('../../models/roomModels');
const bookingRoomController = require('../../controllers/Booking/bookingRoomController');

// GET all Bookings
router.get("/", bookingRoomController.getAllBookings);

// GET a single booking by ID
router.get("/:id", bookingRoomController.getBookingById);

// CREATE a new booking for room
router.post("/", bookingRoomController.createBookingRoom);

// CREATE a new booking for car
// router.post("/bookings/car", bookingRoomController.createBookingRoom);

// CREATE a new booking for boat
// router.post("/bookings/boat", bookingRoomController.createBookingRoom);


// UPDATE a booking by ID
router.put("/:id", bookingRoomController.updateBookingById);

// DELETE a booking by ID
router.delete("/:id", bookingRoomController.deleteBookingById);

module.exports = router;
