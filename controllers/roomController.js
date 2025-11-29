const Room = require("../models/Room");

// CREATE ROOM
exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    return res.status(201).json(room);
  } catch (err) {
    console.error("Error creating room:", err);
    return res.status(400).json({ error: err.message });
  }
};

// GET ALL ROOMS
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    return res.status(200).json(rooms);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch rooms" });
  }
};

// GET ROOM BY ID
exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ error: "Room not found" });

    return res.json(room);
  } catch (err) {
    return res.status(400).json({ error: "Invalid room ID" });
  }
};

// UPDATE ROOM
exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!room) return res.status(404).json({ error: "Room not found" });

    return res.json(room);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// DELETE ROOM
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) return res.status(404).json({ error: "Room not found" });

    return res.json({ message: "Room deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: "Invalid room ID" });
  }
};
