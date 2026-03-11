import express from "express";
import { getTemples, createTemple } from "../controllers/TempleController.js";

const router = express.Router();

router.get("/", getTemples);
router.post("/", createTemple);

export default router;