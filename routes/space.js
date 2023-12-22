const express = require('express');
const router = express.Router();
const Space = require('../models/spaceModels'); // Adjust the path accordingly


router.get("/spaces", async (req, res) => {
    try {
        const spaces = await Space.find({});
        res.status(200).json(spaces);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a single space by ID
router.get("/spaces/:id", async (req, res) => {
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
router.post("/spaces", async (req, res) => {
    try {
        const newSpace = await Space.create(req.body);
        res.status(201).json(newSpace);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a space by ID
router.put("/spaces/:id", async (req, res) => {
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
router.delete("/spaces/:id", async (req, res) => {
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
