const express = require('express')
<<<<<<< HEAD
const mongoose = require('mongoose')
const Hotel = require('./models/hotelModels')
const Car = require('./models/carModels')
const Boat = require('./models/boatModels')
const Event = require('./models/eventModels')
const Flight = require('./models/flightModels')
const Space = require('./models/spaceModels')
const Tour = require('./models/TourModels');
const bodyParser = require('body-parser');
const Booking = require('./models/bookingModels');
const Room = require('./models/roomModels');
const Roomrouter = require('./routes/rooms');

const morgan = require("morgan") //import morgan
const { log } = require("mercedlogger") // import mercedlogger's log function
const UserRouter = require("./controllers/users") //import User Routes
const app = express();
require("dotenv").config() // load .env variables
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies
=======
const { default: mongoose } = require('mongoose')
const Booking = require('./models/bookingModels');


const Roomrouter = require('./routes/rooms');
const flightRoutes = require('./routes/flight');
const spaceRoutes = require('./routes/space');
const eventRoutes = require('./routes/event');
const BoatRoutes = require('./routes/boat');
const carRoutes = require('./routes/car');
const hotelRoutes = require('./routes/hotel');
const tourRouter = require('./routes/tour');
const roomRouter = require('./routes/room');
>>>>>>> d136564bc5869f87e6a558cedb102c51c31d8e46

const cors = require('cors');

app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing

app.use(cors());
app.use(express.json())
app.getMaxListeners('/', (req, res) => {
    res.send("Hello Node API")

})

// Routes
app.use('/', flightRoutes);
app.use('/', spaceRoutes);
app.use('/',eventRoutes);
app.use('/',BoatRoutes);
app.use('/',carRoutes);
app.use('/',hotelRoutes);
app.use('/',tourRouter);
app.use('/',roomRouter);

app.listen(4000, () => {
    console.log("Node API app is running on Port 4000");
});
<<<<<<< HEAD

app.get("/hotel", async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    try {
        const newHotels = await Hotel.find({})
        res.status(200).json(newHotels)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})
app.get("/hotel/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Use the id parameter to find a single hotel by its ID
        const hotel = await Hotel.findById(id);

        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        res.status(200).json(hotel);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post("/hotel", async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    try {
        const newHotel = await Hotel.create(req.body)
        res.status(200).json(newHotel)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.get("/tour", async (req, res) => {
    try {
        const newTour = await Tour.find({});
        res.status(200).json(newTour);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get("/tour/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const tour = await Tour.findById(id);

        if (!tour) {
            return res.status(404).json({ message: "Tour not found" });
        }

        res.status(200).json(tour);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post("/tour", async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(200).json(newTour);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
=======
mongoose.
    connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
    .then(() => {
        app.getMaxListeners('/blog', (req, res) => {
            res.send("Hello Node API")
>>>>>>> d136564bc5869f87e6a558cedb102c51c31d8e46



// GET all bookings
app.get("/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single booking by ID
app.get("/bookings/:id", async (req, res) => {
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
});

// CREATE a new booking
app.post("/bookings", async (req, res) => {
    try {
        const newBooking = await Booking.create(req.body);
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a booking by ID
app.put("/bookings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json(updatedBooking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a booking by ID
app.delete("/bookings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET all rooms
<<<<<<< HEAD
app.get("/rooms", async (req, res) => {
    try {
        const rooms = await Room.find({});
        res.status(200).json(rooms);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single room by ID
app.get("/rooms/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json(room);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new room
app.post("/rooms", async (req, res) => {
    try {
        const newRoom = await Room.create(req.body);
        res.status(201).json(newRoom);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a room by ID

app.put("/rooms/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRoom) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json(updatedRoom);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a room by ID

app.delete("/rooms/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRoom = await Room.findByIdAndDelete(id);

        if (!deletedRoom) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json({ message: "Room deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}
);
=======
>>>>>>> d136564bc5869f87e6a558cedb102c51c31d8e46
