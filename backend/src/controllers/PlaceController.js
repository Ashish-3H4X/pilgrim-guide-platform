import Place from "../models/Place.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getPlaces = asyncHandler(async (req, res) => {

  const filter = {};

  if (req.query.city) {
    filter.city = req.query.city;
  }

  const places = await Place.find(filter).populate("city");

  res.json({
    success: true,
    count: places.length,
    data: places
  });

});

export const createPlace = asyncHandler(async (req, res) => {

  const place = new Place(req.body);
  await place.save();

  res.status(201).json({
    success: true,
    data: place
  });

});