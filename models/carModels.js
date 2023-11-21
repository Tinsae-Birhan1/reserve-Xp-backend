const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
    {
        carName: {
            type: String,
            required: [true, "Please enter the car name"]
        },
        brand: {
            type: String,
            required: [true, "Please enter the brand"]
        },
        price: {
            type: Number,
            required: [true, "Please enter the price"]
        },
        color: {
            type: String,
            required: [true, "Please enter the color"]
        },
        mileage: {
            type: Number,
            required: [true, "Please enter the mileage"]
        },
        fuelType: {
            type: String,
            required: [true, "Please enter the fuel type"]
        },
        transmission: {
            type: String,
            required: [true, "Please enter the transmission"]
        }
    },
    {
        timestamps: true
    }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
