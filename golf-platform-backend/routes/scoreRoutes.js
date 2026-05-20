import express from "express";
import { addScore } from "../controllers/scoreController.js";
import { protect } from "../middleware/authMiddleware.js";
import { checkSubscription } from "../middleware/subscriptionMiddleware.js";
import Score from "../models/Score.js";

const router = express.Router();

// add score
router.post("/", protect, checkSubscription, addScore);

// 🔥 latest first
router.get("/my", protect, async (req, res) => {
  const scores = await Score.find({ user: req.user._id })
    .sort({ date: -1 });

  res.json(scores);
});

export default router;