import express from "express";
import {
  getCharities,
  getFeatured,
} from "../controllers/charityController.js";

const router = express.Router();

router.get("/", getCharities);
router.get("/featured", getFeatured);

export default router;