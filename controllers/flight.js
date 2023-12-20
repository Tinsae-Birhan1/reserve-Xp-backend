// Import necessary modules
const Flight = require('../models/flightModels');

// Controller for getting all flights
const getAllFlights = async (req, res) => {
    try {
        const { price, type } = req.query;
        let filter = {};

        if (price) {
            filter.price = price;
        }

        if (type) {
            filter.type = type;
        }

        const flights = await Flight.find(filter);
        res.json(flights);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for getting a single flight by ID
const getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) {
            return res.status(404).json({ error: 'Flight not found' });
        }
        res.json(flight);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for creating a new flight
const createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body);
        await flight.save();
        res.status(201).json(flight);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for updating a flight
const updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!flight) {
            return res.status(404).json({ error: 'Flight not found' });
        }
        res.json(flight);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for deleting a flight
const deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndDelete(req.params.id);
        if (!flight) {
            return res.status(404).json({ error: 'Flight not found' });
        }
        res.json({ message: 'Flight deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export the controller functions
module.exports = {
    getAllFlights,
    getFlightById,
    createFlight,
    updateFlight,
    deleteFlight,
};
