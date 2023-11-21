const express = require('express')
const { default: mongoose } = require('mongoose')
const Hotel = require('./models/hotelModels')
const Car = require('./models/carModels')
const Boat = require('./models/boatModels')
const Event = require('./models/eventModels')
const app = express()
app.use(express.json())
app.getMaxListeners('/', (req, res)=>{
    res.send("Hello Node API")

})


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

app.get("/hotel", async(req, res)=>{
    // console.log(req.body)
    // res.send(req.body)
    try{
        const newHotels = await Hotel.find({})
        res.status(200).json(newHotels)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
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

app.post("/hotel", async(req, res)=>{
    // console.log(req.body)
    // res.send(req.body)
    try{
        const newHotel = await Hotel.create(req.body)
        res.status(200).json(newHotel)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
mongoose.
connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
.then(()=> {
    app.getMaxListeners('/blog', (req, res)=>{
        res.send("Hello Node API")
    
    })
    console.log("connected to mongo")
}).catch((error)=> {
    console.log(error)
})