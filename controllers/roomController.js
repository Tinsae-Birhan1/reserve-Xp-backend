const Room = require('../models/roomModels.js');
const BookingDatabase = require('../database/DatabaseBooking.js');

// GET all Rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET a single room by ID
const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(room);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// CREATE a new room
const createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(201).json(newRoom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// UPDATE a room by ID
const updateRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.log(error.message); // Add this line to log the error message
    res.status(500).json({ message: error.message });
  }
};

// DELETE a room by ID
const deleteRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoom = await Room.findByIdAndDelete(id);

    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// book a room
const bookRoom = async (req, res) => {
  try {
    const body = req.body;
    const RoomId = req.params?.roomid;
    const guestName = body.guestName;
    const checkInDate = body.checkInDate;
    const checkOutDate = body.checkOutDate;

    const room = await Room.findById(RoomId);
    // console.log({ room });

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    else {

      const hasbeenbooked = await BookingDatabase.getBookingByroomId(RoomId);

      if (hasbeenbooked) {
        res.status(200).json({ message: "reserved" });
      }
      else {

        const newobj = Object.assign({}, {
          RoomId: RoomId,
          guestName: guestName,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
        });

        const response = await BookingDatabase.createBooking(newobj);
        if (response) {
          res.status(200).json({ message: "Booked", response: response });
        }
        else {
          throw new Error("booking failed");
        }

      }

    }

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoomById,
  deleteRoomById,
  bookRoom
};






