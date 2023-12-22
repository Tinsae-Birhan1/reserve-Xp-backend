
const mongoose = require("mongoose");

const TourSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter the title"]
        },
        content: {
            type: String,
            required: [true, "Please enter the content"]
        },
        videoLink: {
            type: String,
            required: [true, "Please enter the video link"]
        },
        image: {
            type: String,
            required: [true, "Please enter the image"]
        },
        type: String,
        location: {
            type: String,
            required: [true, "Please enter the location"]
        },
        price: {
            type: Number,
        },
        images: {
            type: [String],
            required: [true, "Please provide at least 6 images"]
        },
        contentText: {
            type: String,
            required: [true, "Please enter content text"]
        },
        Date: {
            type: String,
            required: [true, "Please enter the check-in time"]
        },
        Duration: {
            type: String,
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
