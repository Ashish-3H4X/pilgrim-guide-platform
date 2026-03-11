import Temple from "../models/Temple.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getTemples = asyncHandler(async (req, res) => {

  const filter = {};

  if (req.query.city) {
    filter.city = req.query.city;
  }

  const temples = await Temple.find(filter).populate("city");

  res.json({
    success: true,
    count: temples.length,
    data: temples
  });

});

export const createTemple = asyncHandler(async (req, res) => {

  const temple = new Temple(req.body);
  await temple.save();

  res.status(201).json({
    success: true,
    data: temple
  });

});