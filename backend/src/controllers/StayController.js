import Stay from "../models/Stay.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getStays = asyncHandler(async (req, res) => {

  const filter = {};

  if (req.query.city) {
    filter.city = req.query.city;
  }

  const stays = await Stay.find(filter).populate("city");

  res.json({
    success: true,
    count: stays.length,
    data: stays
  });

});

export const createStay = asyncHandler(async (req, res) => {

  const stay = new Stay(req.body);
  await stay.save();

  res.status(201).json({
    success: true,
    data: stay
  });

});