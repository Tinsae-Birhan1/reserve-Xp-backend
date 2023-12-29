const BookingCar = require("../models/Booking/bookingCarModels");

const BookingCarDatabase = {

    // Method to create a new booking
    createBooking: async (book = null) => {
        try {

            if (book) {

                const newobj = Object.assign({}, {
                    carId: book.CarId,
                    guestName: book.guestName,
                    checkInDate: book.checkInDate,
                    checkOutDate: book.checkOutDate,
                });

                console.log({ newobj });

                const response = await BookingCar.create([newobj]);
                console.log({ response });
                return response;

            }

        } catch (error) {

        }

    },

    getBookingBycarId: async (carId = "") => {
        if (carId) {
            const exitbooking = await BookingCar.findOne({
                carId: carId,
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

module.exports = BookingCarDatabase;