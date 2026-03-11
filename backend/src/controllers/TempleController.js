import Temple from "../models/Temple.js";

export const getTemples = async (req, res) => {
  const temples = await Temple.find().populate("city");
  res.json(temples);
};

export const createTemple = async (req, res) => {
  const temple = new Temple(req.body);
  await temple.save();
  res.json(temple);
};