const SpaceBooking = require("../models/Booking/spaceBookingModels");
const SpaceBookingDatabase = {

    // Method to create a new booking
    createBooking: async (book = null) => {
        try {
            if (book) {
                const newobj = Object.assign({}, {
                    spaceId: book.SpaceId,
                    guestName: book.guestName,
                    checkInDate: book.checkInDate,
                    checkOutDate: book.checkOutDate,
                });
                console.log({ newobj });
                const response = await SpaceBooking.create([newobj]);
                console.log({ response });
                return response;
            }
        } catch (error) {
        }
    },
    getBookingBySpaceId: async (spaceId = "") => {
        if (spaceId) {
            const exitbooking = await SpaceBooking.findOne({
                spaceId: spaceId,
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
module.exports = SpaceBookingDatabase;
