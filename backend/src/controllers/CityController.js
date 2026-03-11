import City from "../models/City.js";

export const getCities = async (req, res) => {
  const cities = await City.find();
  res.json(cities);
};

export const createCity = async (req, res) => {
  const city = new City(req.body);
  await city.save();
  res.json(city);
};