import express from "express";
import {
  submitProof,
  reviewProof,
} from "../controllers/verificationController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, submitProof);
router.post("/review", protect, adminOnly, reviewProof);
router.get("/", protect, adminOnly, async (req, res) => {
  const data = await Verification.find().populate("user draw");
  res.json(data);
});
export default router;