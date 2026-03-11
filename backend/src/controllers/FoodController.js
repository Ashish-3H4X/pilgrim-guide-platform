import Food from "../models/Food.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("city");
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};