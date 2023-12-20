import { response } from 'express';
const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModels');


// Import necessary modules or dependencies
const Booking = require('../models/bookingModel');

// Define the Booking controller object
const BookingController = {
    // Method to create a new booking
    createBooking: async (req, res) => {
        const { roomId, bookingDate } = req.body;

        console.log('Creating a new booking...');
        console.log('Room ID:', roomId);
        console.log('Booking Date:', bookingDate);

        // Check if the room is already booked on the requested date
        const existingBooking = await Booking.findOne({ roomId, bookingDate });

        if (existingBooking) {
            console.log('Room is already booked on this date.');
            return res.status(400).json({ message: 'Room is already booked on this date.' });
        }

        // If the room is not booked, create a new booking
        const newBooking = await Booking.create(req.body);

        console.log('New booking created:', newBooking);

        res.status(201).json(newBooking);
    },

    // Method to retrieve a specific booking
    getBooking: (req, res) => {
        // Add your code here to retrieve a specific booking
    },

    // Method to update a booking
    updateBooking: (req, res) => {
        // Add your code here to update a booking
    }
};

module.exports = BookingController;