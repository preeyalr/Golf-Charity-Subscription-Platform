import Score from "../models/Score.js";
import { calculateStableford } from "../utils/stableford.js";

export const addScore = async (req, res) => {
  try {
    const { courseName, holes, date } = req.body;

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const points = calculateStableford(holes);

    if (points < 1 || points > 45) {
      return res.status(400).json({
        message: "Score must be between 1 and 45",
      });
    }

    // 🔥 create score
    const score = await Score.create({
      user: req.user._id,
      courseName,
      holes,
      stablefordPoints: points,
      date,
    });

    // 🔥 keep only last 5 scores
    const userScores = await Score.find({ user: req.user._id })
      .sort({ date: -1 });

    if (userScores.length > 5) {
      const toDelete = userScores.slice(5); // older ones
      const ids = toDelete.map((s) => s._id);

      await Score.deleteMany({ _id: { $in: ids } });
    }

    res.json(score);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};