const mongoose = require('mongoose');

const booking_SpaceSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    spaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Space',
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

const BookingSpace = mongoose.model('BookingSpace', booking_SpaceSchema);

module.exports = BookingSpace;
