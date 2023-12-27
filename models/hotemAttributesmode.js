const mongoose = require('mongoose');

const hotelAttributesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    // Add more fields as needed

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const HotelAttributes = mongoose.model('HotelAttributes', hotelAttributesSchema);

module.exports = HotelAttributes;
