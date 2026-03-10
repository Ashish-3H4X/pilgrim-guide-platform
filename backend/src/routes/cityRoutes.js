import express from "express";
import City from "../models/City.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const cities = await City.find();
  res.json(cities);
});

router.post("/", async (req, res) => {
  const city = new City(req.body);
  await city.save();
  res.json(city);
});

export default router;