const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all cars');
});

router.get('/:id', (req, res) => {
    const carId = req.params.id;
    res.send(`Get car with ID ${carId}`);
});

router.post('/', (req, res) => {
    res.send('Create a new car');
});

router.put('/:id', (req, res) => {
    const carId = req.params.id;
    res.send(`Update car with ID ${carId}`);
});

router.delete('/:id', (req, res) => {
    const carId = req.params.id;
    res.send(`Delete car with ID ${carId}`);
});

module.exports = router;
