import Food from "../models/Food.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getFoods = asyncHandler(async (req, res) => {

  const filter = {};

  if (req.query.city) {
    filter.city = req.query.city;
  }

  const foods = await Food.find(filter).populate("city");

  res.json({
    success: true,
    count: foods.length,
    data: foods
  });

});

export const createFood = asyncHandler(async (req, res) => {

  const food = new Food(req.body);
  await food.save();

  res.status(201).json({
    success: true,
    data: food
  });

});