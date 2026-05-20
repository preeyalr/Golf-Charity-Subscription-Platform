import Verification from "../models/Verification.js";
import Draw from "../models/Draw.js";

// ✅ user submits proof
export const submitProof = async (req, res) => {
  const { drawId, proof } = req.body;

  const draw = await Draw.findById(drawId);

  // check if user is winner
  const isWinner =
    draw.winners.match5.includes(req.user._id) ||
    draw.winners.match4.includes(req.user._id) ||
    draw.winners.match3.includes(req.user._id);

  if (!isWinner) {
    return res.status(403).json({ message: "Not eligible" });
  }

  const verification = await Verification.create({
    user: req.user._id,
    draw: drawId,
    proof,
  });

  res.json(verification);
};

// ✅ admin review
export const reviewProof = async (req, res) => {
  const { id, action } = req.body;

  const verification = await Verification.findById(id);

  if (action === "approve") {
    verification.status = "approved";
    verification.paymentStatus = "paid";
  } else {
    verification.status = "rejected";
  }

  await verification.save();

  res.json(verification);
};