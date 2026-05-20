import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createCheckoutSession } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/subscribe", authMiddleware, createCheckoutSession);

export default router;