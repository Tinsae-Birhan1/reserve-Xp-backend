const FlightBooking = require("../models/Booking/flightBookingModels");
const FlightBookingDatabase = {

    // Method to create a new booking
    createBooking: async (book = null) => {
        try {
            if (book) {
                const newobj = Object.assign({}, {
                    flightId: book.FlightId,
                    guestName: book.guestName,
                    checkInDate: book.checkInDate,
                    checkOutDate: book.checkOutDate,
                });
                console.log({ newobj });
                const response = await FlightBooking.create([newobj]);
                console.log({ response });
                return response;
            }
        } catch (error) {
        }
    },
    getBookingByFlightId: async (flightId = "") => {
        if (flightId) {
            const exitbooking = await FlightBooking.findOne({
                flightId: flightId,
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
module.exports = FlightBookingDatabase;
