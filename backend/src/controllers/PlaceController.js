import Place from "../models/Place.js";

export const getPlaces = async (req, res) => {
  const places = await Place.find().populate("city");
  res.json(places);
};

export const createPlace = async (req, res) => {
  const place = new Place(req.body);
  await place.save();
  res.json(place);
};