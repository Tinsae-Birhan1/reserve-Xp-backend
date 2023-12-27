const express = require('express');
const Room = require('../models/roomModels');
const BookingDatabase = require('../database/DatabaseBooking');

// Define the Booking controller object
const BookingController = {
    // Method to create a new booking
    createBooking: async (req, res) => {
        try {
            const body = req.body;
            const RoomId = body.roomId;
            
            const guestName = body.guestName;
            const checkInDate = body.checkInDate;
            const checkOutDate = body.checkOutDate;
            const room = await Room.findById(RoomId);

            if (!room) {
                return res.status(404).json({ message: "Room not found" });
            }
            else {

                const hasbeenbooked = await BookingDatabase.getBookingByroomId(RoomId);

                if (hasbeenbooked) {
                    res.status(200).json({ message: "reserved" });
                }
                else {

                    const newobj = Object.assign({}, {
                        RoomId: RoomId,
                        guestName: guestName,
                        checkInDate: checkInDate,
                        checkOutDate: checkOutDate,
                        room: room
                    });
                    

                    const response = await BookingDatabase.createBooking(newobj);
                    await Room.findByIdAndUpdate(RoomId, {
                            isAvailable: false
                    })

                }

            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    },

    // UPDATE a booking by ID
    updateBookingById: async (req, res) => {
        try {
            const { id } = req.params;
            const oldBooking = await Booking.findById(id);
            if(req.body.roomId != oldBooking.RoomId){
                await Room.findByIdAndUpdate(oldBooking.RoomId, {
                            isAvailable: true
                    })
            }
            const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
            if(req.body.roomId != oldBooking.RoomId){
                await Room.findByIdAndUpdate(req.body.roomId, {
                            isAvailable: false
                    })
            }

            if (!updatedBooking) {
                return res.status(404).json({ message: "Booking not found" });
            }

            res.status(200).json(updatedBooking);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    },

    // DELETE a booking by ID
    deleteBookingById: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedBooking = await Booking.findByIdAndDelete(id, { new: true } );

            await Room.findByIdAndUpdate(deletedBooking.roomId, {
                            isAvailable: true
                    })

            if (!deletedBooking) {
                return res.status(404).json({ message: "Booking not found" });
            }

            res.status(200).json({ message: "Booking deleted successfully" });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    },

    // GET all bookings
    getAllBookings: async (req, res) => {
        try {
            const bookings = await Booking.find();
            res.status(200).json(bookings);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    },

    // GET a single booking by ID
    getBookingById: async (req, res) => {
        try {
            const { id } = req.params;
            const booking = await Booking.findById(id);

            if (!booking) {
                return res.status(404).json({ message: "Booking not found" });
            }

            res.status(200).json(booking);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    },

};

module.exports = BookingController;

const Booking = require('../models/bookingModels.js');
