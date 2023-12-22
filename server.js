const express = require('express')
const { default: mongoose } = require('mongoose')
const Hotel = require('./models/hotelModels')
const Car = require('./models/carModels')
const Boat = require('./models/boatModels')
const Event = require('./models/eventModels')
const Flight = require('./models/flightModels')
const Space = require('./models/spaceModels')
const Tour = require('./models/tourModels');
const bodyParser = require('body-parser');
const Booking = require('./models/bookingModels');
const Room = require('./models/roomModels');
const Roomrouter = require('./routes/rooms');




const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
app.getMaxListeners('/', (req, res) => {
    res.send("Hello Node API")

})


// GET all Flight

app.get("/flights", async (req, res) => {
    try {
        const flights = await Flight.find({});
        res.status(200).json(flights);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single flight by ID
app.get("/flights/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await Flight.findById(id);

        if (!flight) {
            return res.status(404).json({ message: "Flight not found" });
        }

        res.status(200).json(flight);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new flight
app.post("/flights", async (req, res) => {
    try {
        const newFlight = await Flight.create(req.body);
        res.status(201).json(newFlight);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


// UPDATE a flight by ID
app.put("/flights/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFlight = await Flight.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedFlight) {
            return res.status(404).json({ message: "Flight not found" });
        }

        res.status(200).json(updatedFlight);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a flight by ID

app.delete("/flights/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFlight = await Flight.findByIdAndDelete(id);

        if (!deletedFlight) {
            return res.status(404).json({ message: "Flight not found" });
        }

        res.status(200).json({ message: "Flight deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET all spaces
app.get("/spaces", async (req, res) => {
    try {
        const spaces = await Space.find({});
        res.status(200).json(spaces);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single space by ID
app.get("/spaces/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const space = await Space.findById(id);

        if (!space) {
            return res.status(404).json({ message: "Space not found" });
        }

        res.status(200).json(space);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new space
app.post("/spaces", async (req, res) => {
    try {
        const newSpace = await Space.create(req.body);
        res.status(201).json(newSpace);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a space by ID
app.put("/spaces/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSpace = await Space.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedSpace) {
            return res.status(404).json({ message: "Space not found" });
        }

        res.status(200).json(updatedSpace);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a space by ID
app.delete("/spaces/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSpace = await Space.findByIdAndDelete(id);

        if (!deletedSpace) {
            return res.status(404).json({ message: "Space not found" });
        }

        res.status(200).json({ message: "Space deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});



// GET all events
app.get("/events", async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new event
app.post("/events", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single event by ID
app.get("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(event);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE an event by ID
app.put("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE an event by ID
app.delete("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});



// GET all boats
app.get("/boats", async (req, res) => {
    try {
        const boats = await Boat.find({});
        res.status(200).json(boats);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single boat by ID
app.get("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const boat = await Boat.findById(id);

        if (!boat) {
            return res.status(404).json({ message: "Boat not found" });
        }

        res.status(200).json(boat);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new boat
app.post("/boats", async (req, res) => {
    try {
        const newBoat = await Boat.create(req.body);
        res.status(201).json(newBoat);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a boat by ID
app.put("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBoat = await Boat.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBoat) {
            return res.status(404).json({ message: "Boat not found" });
        }

        res.status(200).json(updatedBoat);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a boat by ID
app.delete("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBoat = await Boat.findByIdAndDelete(id);

        if (!deletedBoat) {
            return res.status(404).json({ message: "Boat not found" });
        }

        res.status(200).json({ message: "Boat deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});



// GET all cars
app.get("/cars", async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single car by ID
app.get("/cars/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);

        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(car);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new car
app.post("/cars", async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a car by ID
app.delete("/cars/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);

        if (!deletedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a car by ID
app.put("/cars/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(updatedCar);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


// GET all hotels
app.listen(4000, () => {
    console.log("Node API app is running on Port 4000");
});

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

// CREATE a new booking for a room
app.use("/rooms", Roomrouter);


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



