const express = require('express');
const router = express.Router();
const Boat = require('../models/boatModels'); // Adjust the path accordingly

router.get("/boats", async (req, res) => {
    try {
        const boats = await Boat.find({});
        res.status(200).json(boats);
    } catch (error) {
        console.log("Error in GET /boats:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single boat by ID
router.get("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const boat = await Boat.findById(id);

        if (!boat) {
            return res.status(404).json({ message: "Boat not found" });
        }

        res.status(200).json(boat);
    } catch (error) {
        console.log("Error in GET /boats/:id:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new boat
router.post("/boats", async (req, res) => {
    try {
        const newBoat = await Boat.create(req.body);
        res.status(201).json(newBoat);
    } catch (error) {
        console.log("Error in POST /boats:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a boat by ID
router.put("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBoat = await Boat.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBoat) {
            return res.status(404).json({ message: "Boat not found" });
        }

        res.status(200).json(updatedBoat);
    } catch (error) {
        console.log("Error in PUT /boats/:id:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a boat by ID
router.delete("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBoat = await Boat.findByIdAndDelete(id);

        if (!deletedBoat) {
            return res.status(404).json({ message: "Boat not found" });
        }

        res.status(200).json({ message: "Boat deleted successfully" });
    } catch (error) {
        console.log("Error in DELETE /boats/:id:", error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
