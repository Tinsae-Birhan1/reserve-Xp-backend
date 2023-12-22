const express = require('express')
const { default: mongoose } = require('mongoose')

const Booking = require('./models/bookingModels');


const flightRoutes = require('./routes/flight');
const spaceRoutes = require('./routes/space');
const tourRoutes = require('./routes/tour');
const carRoutes = require('./routes/car');
const boatRoutes = require('./routes/boat');
const hotelRoutes = require('./routes/hotel');
const roomRoutes = require('./routes/room');


const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
app.getMaxListeners('/', (req, res) => {
    res.send("Hello Node API")

})

app.use('/', flightRoutes);
app.use('/', spaceRoutes);
app.use('/', tourRoutes);
app.use('/', carRoutes);
app.use('/', boatRoutes);
app.use('/', hotelRoutes);
app.use("/", roomRoutes);




// GET all hotels
app.listen(4000, () => {
    console.log("Node API app is running on Port 4000");
});


mongoose.
    connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
    .then(() => {
        app.getMaxListeners('/blog', (req, res) => {
            res.send("Hello Node API")

        })
        console.log("connected to mongo")
    }).catch((error) => {
        console.log(error)
    })




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



