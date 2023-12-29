const express = require('express');
const router = express.Router();
// const Room = require('../models/roomModels');
// const bookingRoomController = require('../controllers/bookingRoomController.js');
const room = require("./bookingroutes/room.js");
const car = require("./bookingroutes/car.js");

// router.use("/bookings", async (req, res, next) => {
//     try {

//         if (req.method === "POST") {

//             const body = req.body;
//             const booking_Type = body.booking_Type;

//             if (booking_Type === "room") {
//                 req.url = req.url + "/room";

//                 // body.roomId = body.Id ? body.Id : 0;
//                 // const room = await Room.findById(body.roomId);
//                 // body.found = room ? room : null;
//                 // console.log({ room });
//                 next();

//             }
//             else if (booking_Type === "car") {
//                 req.url = req.url + "/car";
//                 next();
//             }
//             else if (booking_Type === "boat") {
//                 console.log("in the middleware");
//                 req.url = req.url + "/boat";
//             }
//             else {
//                 res.status(500).json({ message: "wrong input" });
//             }
//         }
//         else {
//             next();
//         }

//     } catch (error) {
//         res.status(500).json({ message: "wrong input" });
//     }

// });

router.use("/bookings/room", room);
router.use("/bookings/car", car);



// GET all Bookings
// router.get("/bookings", bookingController.getAllBookings);

// GET a single booking by ID
// router.get("/bookings/:id", bookingController.getBookingById);

// CREATE a new booking for room
// router.post("/bookings/room", bookingController.createBookingRoom);

// CREATE a new booking for car
// router.post("/bookings/car", bookingController.createBookingRoom);

// CREATE a new booking for boat
// router.post("/bookings/boat", bookingController.createBookingRoom);


// UPDATE a booking by ID
// router.put("/bookings/:id", bookingController.updateBookingById);

// DELETE a booking by ID
// router.delete("/bookings/:id", bookingController.deleteBookingById);

module.exports = router;
