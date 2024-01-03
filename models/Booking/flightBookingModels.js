const mongoose = require('mongoose');

const booking_FlightSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    },
    guestName: {
        type: String,
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const BookingFlight = mongoose.model('BookingFlight', booking_FlightSchema);

module.exports = BookingFlight;
