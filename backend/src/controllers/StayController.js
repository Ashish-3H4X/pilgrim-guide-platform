import Stay from "../models/Stay.js";

export const getStays = async (req, res) => {
  try {
    const stays = await Stay.find().populate("city");
    res.json(stays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStay = async (req, res) => {
  try {
    const stay = new Stay(req.body);
    await stay.save();
    res.json(stay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};