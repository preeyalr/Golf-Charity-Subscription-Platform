import User from "../models/User.js";
import Score from "../models/Score.js";
import Ticket from "../models/Ticket.js";
import Draw from "../models/Draw.js";
import Verification from "../models/Verification.js";

export const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("charity");

    const scores = await Score.find({ user: req.user._id }).sort({
      date: -1,
    });

    const tickets = await Ticket.find({ user: req.user._id });

    const verifications = await Verification.find({
      user: req.user._id,
    });

    // 💰 total winnings
    const totalWon = verifications
      .filter((v) => v.paymentStatus === "paid")
      .length * 1000; // simple logic

    res.json({
      subscription: user.subscription,
      charity: user.charity,
      charityPercentage: user.charityPercentage,

      scores,
      ticketsCount: tickets.length,

      totalWon,
      verifications,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};