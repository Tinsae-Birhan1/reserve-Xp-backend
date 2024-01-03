const Event = require('../models/eventModels.js');
const BookingEventDatabase = require('../database/DatabaseEventBooking.js');

// GET all Events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// GET a single event by ID
const getEventById = async (req, res) => {
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
};

// CREATE a new event
const createEvent = async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// UPDATE an event by ID
const updateEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.log(error.message); // Add this line to log the error message
        res.status(500).json({ message: error.message });
    }
};

// DELETE an event by ID
const deleteEventById = async (req, res) => {
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
};

//Book an event
const bookEvent = async (req, res) => {
    try {
        const body = req.body;
        const eventId = req.params?.eventid;
        const guestName = body.guestName;
        const checkInDate = body.checkInDate;
        const checkOutDate = body.checkOutDate;

        const event = await Event.findById(eventId);
        console.log({ event });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        else {

            const hasBeenBooked = await BookingEventDatabase.getBookingByEventId(eventId);

            if (hasBeenBooked) {
                res.status(200).json({ message: "Reserved" });
            }
            else {
                const newBooking = Object.assign({}, {
                    eventId: event._id,
                    guestName: guestName,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                });

                const response = await BookingEventDatabase.createBooking(newBooking);
                if (response) {
                    res.status(200).json({ message: "Booked", response: response });
                }
                else {
                    throw new Error("Booking failed");
                }

            }

        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEventById,
    deleteEventById,
    bookEvent
};
