import City from "../models/City.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getCities = asyncHandler(async (req, res) => {

  const cities = await City.find();

  res.json({
    success: true,
    count: cities.length,
    data: cities
  });

});

export const createCity = asyncHandler(async (req, res) => {

  const city = new City(req.body);
  await city.save();

  res.status(201).json({
    success: true,
    data: city
  });

});