import express from "express";
import { getPlaces, createPlace } from "../controllers/PlaceController.js";

const router = express.Router();

router.get("/", getPlaces);
router.post("/", createPlace);

export default router;