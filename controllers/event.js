const Event = require('../models/eventModels');

exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, location } = req.body;
        console.log('Creating event:', title, description, date, location);
        const event = new Event({
            title,
            description,
            date,
            location
        });
        await event.save();
        console.log('Event created:', event);
        res.status(201).json({ success: true, event });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        console.log('All events:', events);
        res.status(200).json({ success: true, events });
    } catch (error) {
        console.error('Error getting all events:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Getting event by ID:', id);
        const event = await Event.findById(id);
        if (!event) {
            console.log('Event not found');
            return res.status(404).json({ success: false, error: 'Event not found' });
        }
        console.log('Event found:', event);
        res.status(200).json({ success: true, event });
    } catch (error) {
        console.error('Error getting event by ID:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateEventById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Updating event by ID:', id);
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!event) {
            console.log('Event not found');
            return res.status(404).json({ success: false, error: 'Event not found' });
        }
        console.log('Event updated:', event);
        res.status(200).json({ success: true, event });
    } catch (error) {
        console.error('Error updating event by ID:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteEventById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Deleting event by ID:', id);
        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            console.log('Event not found');
            return res.status(404).json({ success: false, error: 'Event not found' });
        }
        console.log('Event deleted:', event);
        // Send a success response
        res.status(200).json({ success: true, message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event by ID:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
