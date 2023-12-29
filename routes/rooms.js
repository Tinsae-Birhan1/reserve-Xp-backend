const express = require('express');
const Room = require('../models/roomModels');
const BookingController = require("../controllers/booking")
// import express from 'express'
// import {
//   createRoom,
//   deleteRoom,
//   getRoom,
//   getRooms,
//   updateRoom,
//   updateRoomAvailability,
// } from "../controllers/room.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

const Roomrouter = express.Router();

Roomrouter.post("/booking", BookingController.createBooking);

// GET all bookings for a room
Roomrouter.get("/:id/bookings", async (req, res) => {
  try {
    const { id } = req.params;

    console.log({ id });
    const room = await Room.findById(id).populate("bookings");

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(room.bookings);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// GET a single booking for a room by ID
Roomrouter.get("/:id/bookings/:bookingId", async (req, res) => {
  try {
    const { id, bookingId } = req.params;
    const room = await Room.findById(id).populate("bookings");
    const booking = room.bookings.find((booking) => booking.id === bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

);

// UPDATE a booking for a room by ID
Roomrouter.put("/:id/bookings/:bookingId", async (req, res) => {

  try {
    const { id, bookingId } = req.params;
    const room = await Room.findById(id).populate("bookings");
    const booking = room.bookings.find((booking) => booking.id === bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, req.body, { new: true });

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

);

// DELETE a booking for a room by ID
Roomrouter.delete("/:id/bookings/:bookingId", async (req, res) => {
  try {
    const { id, bookingId } = req.params;
    const room = await Room.findById(id).populate("bookings");
    const booking = room.bookings.find((booking) => booking.id === bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await Booking.findByIdAndDelete(bookingId);

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

);

// GET all rooms
// app.get("/rooms", async (req, res) => {
//   try {
//       const rooms = await Room.find({});
//       res.status(200).json(rooms);
//   } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ message: error.message });
//   }
// });

// GET a single room by ID
// app.get("/rooms/:id", async (req, res) => {
//   try {
//       const { id } = req.params;
//       const room = await Room.findById(id);

//       if (!room) {
//           return res.status(404).json({ message: "Room not found" });
//       }

//       res.status(200).json(room);
//   } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ message: error.message });
//   }
// });

// CREATE a new room
// app.post("/rooms", async (req, res) => {
//     try {
//         const newRoom = await Room.create(req.body);
//         res.status(201).json(newRoom);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message });
//     }
// });

// UPDATE a room by ID

// app.put("/rooms/:id", async (req, res) => {
//   try {
//       const { id } = req.params;
//       const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });

//       if (!updatedRoom) {
//           return res.status(404).json({ message: "Room not found" });
//       }

//       res.status(200).json(updatedRoom);
//   } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ message: error.message });
//   }
// });

// DELETE a room by ID

// app.delete("/rooms/:id", async (req, res) => {

//   try {
//       const { id } = req.params;
//       const deletedRoom = await Room.findByIdAndDelete(id);

//       if (!deletedRoom) {
//           return res.status(404).json({ message: "Room not found" });
//       }

//       res.status(200).json({ message: "Room deleted successfully" });
//   } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ message: error.message });
//   }
// }

// );


module.exports = Roomrouter;