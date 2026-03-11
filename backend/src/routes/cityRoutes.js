import express from "express";
import { getCities, createCity } from "../controllers/CityController.js";

const router = express.Router();

router.get("/", getCities);
router.post("/", createCity);

export default router;