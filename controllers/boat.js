// Import necessary modules
const Boat = require('../models/boatModels');

// Controller methods
const getAllBoats = async (req, res) => {
    try {
        const { type, price, brand, status } = req.query;
        let filter = {};

        if (type) {
            filter.type = type;
        }
        if (price) {
            filter.price = price;
        }
        if (brand) {
            filter.brand = brand;
        }
        if (status) {
            filter.status = status;
        }

        const boats = await Boat.find(filter);
        res.status(200).json(boats);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getBoatById = async (req, res) => {
    try {
        const boat = await Boat.findById(req.params.id);
        if (!boat) {
            return res.status(404).json({ error: 'Boat not found' });
        }
        res.status(200).json(boat);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createBoat = async (req, res) => {
    try {
        const newBoat = new Boat(req.body);
        const savedBoat = await newBoat.save();
        res.status(201).json(savedBoat);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateBoat = async (req, res) => {
    try {
        const updatedBoat = await Boat.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBoat) {
            return res.status(404).json({ error: 'Boat not found' });
        }
        res.status(200).json(updatedBoat);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteBoat = async (req, res) => {
    try {
        const deletedBoat = await Boat.findByIdAndDelete(req.params.id);
        if (!deletedBoat) {
            return res.status(404).json({ error: 'Boat not found' });
        }
        res.status(200).json({ message: 'Boat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export controller methods
module.exports = {
    getAllBoats,
    getBoatById,
    createBoat,
    updateBoat,
    deleteBoat,
};
