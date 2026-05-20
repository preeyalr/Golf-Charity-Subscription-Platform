import express from "express";
import {
  getDashboardStats,
  getUsers,
  deleteScore,
  createCharity,
  deleteCharity,
  getWinners,
  markPaid,
} from "../controllers/adminController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, getDashboardStats);

router.get("/users", protect, adminOnly, getUsers);

router.delete("/score/:id", protect, adminOnly, deleteScore);

router.post("/charity", protect, adminOnly, createCharity);
router.delete("/charity/:id", protect, adminOnly, deleteCharity);

router.get("/winners", protect, adminOnly, getWinners);
router.post("/pay/:id", protect, adminOnly, markPaid);

export default router;