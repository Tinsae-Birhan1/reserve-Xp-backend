const Car = require('../models/carModels.js');
const BookingCarDatabase = require('../database/DatabaseCarBooking.js');

// GET all Cars
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// GET a single car by ID
const getCarById = async (req, res) => {
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
};

// CREATE a new car
const createCar = async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// UPDATE a car by ID
const updateCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(updatedCar);
    } catch (error) {
        console.log(error.message); // Add this line to log the error message
        res.status(500).json({ message: error.message });
    }
};

// DELETE a car by ID
const deleteCarById = async (req, res) => {
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
};

//Book a car
const bookCar = async (req, res) => {
    try {
        const body = req.body;
        const CarId = req.params?.carid;
        const guestName = body.guestName;
        const checkInDate = body.checkInDate;
        const checkOutDate = body.checkOutDate;

        const car = await Car.findById(CarId);
        console.log({ car });

        if (!car) {
            return res.status(404).json({ message: "car not found" });
        }
        else {

            const hasbeenbooked = await BookingCarDatabase.getBookingBycarId(CarId);

            if (hasbeenbooked) {
                res.status(200).json({ message: "reserved" });
            }
            else {
                const newobj = Object.assign({}, {
                    CarId: car._id,
                    guestName: guestName,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                });

                const response = await BookingCarDatabase.createBooking(newobj);
                if (response) {
                    res.status(200).json({ message: "Booked", response: response });
                }
                else {
                    throw new Error("booking failed");
                }

            }

        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCarById,
    deleteCarById,
    bookCar
};
