const BookingEvent = require("../models/Booking/bookingEventModels");
const BookingEventDatabase = {

    // Method to create a new booking
    createBooking: async (book = null) => {
        try {
            if (book) {
                const newobj = Object.assign({}, {
                    eventId: book.EventId,
                    guestName: book.guestName,
                    checkInDate: book.checkInDate,
                    checkOutDate: book.checkOutDate,
                });
                console.log({ newobj });
                const response = await BookingEvent.create([newobj]);
                console.log({ response });
                return response;
            }
        } catch (error) {
        }
    },
    getBookingByeventId: async (eventId = "") => {
        if (eventId) {
            const exitbooking = await BookingEvent.findOne({
                eventId: eventId,
            });
            if (exitbooking) {
                console.log({ exitbooking });
                return true;
            }
            else {
                console.log("error");
                return false;
            }
        }
        else {
        }
    },
};
module.exports = BookingEventDatabase;
