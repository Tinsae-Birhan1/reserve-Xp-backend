// const mongoose = require("mongoose")

// const TourlSchema = mongoose.Schema(
//     {
//         name:{
//             type : String,
//             required : [true, "please enter the Hotel name"]
//         }
//     },
//     {
//         timestamps : true
//     }
// )
// const Tourl = mongoose.model("Hotel",TourlSchema );
// module.exports = Tourl


const mongoose = require("mongoose");

const TourSchema = mongoose.Schema(
    {
        tourName: {
            type: String,
            // required: [true, "Please enter the Tourl name"]
        },
        location: {
            type: String,
            required: [true, "Please enter the location"]
        },
        price: {
            type: Number,
            // required: [true, "Please enter the price"]
        },
        images: {
            type: [String], // Assuming an array of image URLs
            required: [true, "Please provide at least 6 images"]
        },
        contentText: {
            type: String,
            required: [true, "Please enter content text"]
        },
        Date: {
            type: String, // You may want to use a Date type if you need to store both date and time
            required: [true, "Please enter the check-in time"]
        },
        Duration: {
            type: String, // You may want to use a Date type if you need to store both date and time
            required: [true, "Please enter the check-out time"]
        },
        TourlFaq: {
            type: String,
            required: [true, "Please enter the Tourl policy"]
        }
    },
    {
        timestamps: true
    }
);

const Tour = mongoose.model("Tour", TourSchema);
module.exports = Tour;
