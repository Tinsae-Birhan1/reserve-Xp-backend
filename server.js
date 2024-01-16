const express = require('express')
const mongoose = require('mongoose')
const Booking = require('./models/bookingModels');
const bodyParser = require('body-parser');
const morgan = require("morgan") //import morgan
const { log } = require("mercedlogger") // import mercedlogger's log function
const UserRouter = require("./controllers/users") //import User Routes
const app = express();

require('./database/connection')
const Tenant = require('./tenant/tenant')
const {tenantDb , centralDb} = require('./middleware/db')
const {auth , centralAuth} = require('./middleware/auth')

require("dotenv").config() // load .env variables
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies

const cors = require('cors');

app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing

app.use(cors());
app.use(express.json())
const flightRoutes = require('./routes/flight');
const spaceRoutes = require('./routes/space');
const tourRoutes = require('./routes/tour');
const carRoutes = require('./routes/car');
const boatRoutes = require('./routes/boat');
const hotelRoutes = require('./routes/hotel');
const roomRoutes = require('./routes/room');


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.getMaxListeners('/', (req, res) => {
    res.send("Hello Node API")

})

app.get("/api/tenant/", centralAuth, async (req, res) => {
    try {
      const allTenant = await  Tenant.find({})
       res
        .status(201)
        .send({
          allTenant: allTenant,
          message: "Tenant Added Successfully !",
          success: true
        });        
    } catch (error) {
     return res.status(400).json({ message: error.message,success: false });
    }

})
app.post('/api/tenant/', centralAuth, centralDb,async (req, res) => {
    try {
      const newTenant = await  Tenant.create(req.body)
       res
        .status(201)
        .send({
          tenant: newTenant,
          message: "Tenant Added Successfully !",
          success: true
        });
        
       await newTenant.save(); 
    } catch (error) {
     return res.status(400).json({ message: error.message,success: false });
    }
})

app.use('/:slug/',auth,tenantDb,flightRoutes);
app.use('/:slug/',auth,tenantDb, spaceRoutes);
app.use('/:slug/',auth,tenantDb, tourRoutes);
app.use('/:slug/',auth,tenantDb,carRoutes);
app.use('/:slug/',auth,tenantDb, boatRoutes);
app.use('/:slug/',auth,tenantDb, hotelRoutes);
app.use(':slug/',auth,tenantDb,roomRoutes);




// GET all hotels
app.listen(80, () => {
    console.log("Node API app is running on Port 80");
});


// mongoose.
//     connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
//     .then(() => {
//         app.getMaxListeners('/blog', (req, res) => {
//             res.send("Hello Node API")

//         })
//         console.log("connected to mongo")
//     }).catch((error) => {
//         console.log(error)
//     })




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



