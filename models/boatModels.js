
const mongoose = require("mongoose");

const boatSchema = mongoose.Schema(
    {
        boatName: {
            type: String,
            required: [true, "Please enter the boat name"]
        },
        location: {
            type: String,
            required: [true, "Please enter the location"]
        },
        price: {
            type: Number,
            required: [true, "Please enter the price"]
        },
        images: {
            type: [String], // Assuming an array of image URLs
            required: [true, "Please provide at least 6 images"]
        },
        contentText: {
            type: String,
            required: [true, "Please enter content text"]
        },
        checkInTime: {
            type: String, // You may want to use a Date type if you need to store both date and time
            required: [true, "Please enter the check-in time"]
        },
        checkOutTime: {
            type: String, // You may want to use a Date type if you need to store both date and time
            required: [true, "Please enter the check-out time"]
        },
        boatPolicy: {
            type: String,
            required: [true, "Please enter the boat policy"]
        }
    },
    {
        timestamps: true
    }
);

const Boat = mongoose.model("Boat", boatSchema);
module.exports = Boat;
