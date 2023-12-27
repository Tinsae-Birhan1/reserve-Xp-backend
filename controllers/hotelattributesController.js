const HotelAttribute = require('../models/hotelAttributeModels.js');

// GET all Hotel Attributes
const getAllHotelAttributes = async (req, res) => {
    try {
        const hotelAttributes = await HotelAttribute.find({});
        res.status(200).json(hotelAttributes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// GET a single hotel attribute by ID
const getHotelAttributeById = async (req, res) => {
    try {
        const { id } = req.params;
        const hotelAttribute = await HotelAttribute.findById(id);

        if (!hotelAttribute) {
            return res.status(404).json({ message: "Hotel attribute not found" });
        }

        res.status(200).json(hotelAttribute);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// CREATE a new hotel attribute
const createHotelAttribute = async (req, res) => {
    try {
        const newHotelAttribute = await HotelAttribute.create(req.body);
        res.status(201).json(newHotelAttribute);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// UPDATE a hotel attribute by ID
const updateHotelAttributeById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedHotelAttribute = await HotelAttribute.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedHotelAttribute) {
            return res.status(404).json({ message: "Hotel attribute not found" });
        }

        res.status(200).json(updatedHotelAttribute);
    } catch (error) {
        console.log(error.message); // Add this line to log the error message
        res.status(500).json({ message: error.message });
    }
};

// DELETE a hotel attribute by ID
const deleteHotelAttributeById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHotelAttribute = await HotelAttribute.findByIdAndDelete(id);

        if (!deletedHotelAttribute) {
            return res.status(404).json({ message: "Hotel attribute not found" });
        }

        res.status(200).json({ message: "Hotel attribute deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllHotelAttributes,
    getHotelAttributeById,
    createHotelAttribute,
    updateHotelAttributeById,
    deleteHotelAttributeById,
};
