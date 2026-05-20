import Draw from "../models/Draw.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";
import { sendEmail } from "../utils/email.js";

// generate numbers
const generateNumbers = () => {
  return Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 50) + 1
  );
};

export const runDraw = async (req, res) => {
  try {
    const month = new Date().toLocaleString("default", {
      month: "long",
    });

    const numbers = generateNumbers();

    const tickets = await Ticket.find({ month });

    const winners = {
      match5: [],
      match4: [],
      match3: [],
    };

    tickets.forEach((ticket) => {
      const matchCount = ticket.numbers.filter((n) =>
        numbers.includes(n)
      ).length;

      if (matchCount === 5) winners.match5.push(ticket.user);
      else if (matchCount === 4) winners.match4.push(ticket.user);
      else if (matchCount === 3) winners.match3.push(ticket.user);
    });

    // 💰 calculate prize pool from active subscribers
    const activeUsers = await User.find({
      "subscription.status": "active",
    });

    const pool = activeUsers.length * 500; // monthly example

    // split pool
    let match5Pool = pool * 0.4;
    const match4Pool = pool * 0.35;
    const match3Pool = pool * 0.25;

    // jackpot rollover
    const prevDraw = await Draw.findOne().sort({ createdAt: -1 });

    if (prevDraw && prevDraw.winners.match5.length === 0) {
      match5Pool += prevDraw.distribution.match5;
    }

    // split per winner
    const result = {
      match5:
        winners.match5.length > 0
          ? match5Pool / winners.match5.length
          : 0,
      match4:
        winners.match4.length > 0
          ? match4Pool / winners.match4.length
          : 0,
      match3:
        winners.match3.length > 0
          ? match3Pool / winners.match3.length
          : 0,
    };

    const draw = await Draw.create({
      month,
      numbers,
      winners,
      prizePool: pool,
      distribution: result,
    });
await sendEmail(
  "user@email.com",
  "🎉 You Won!",
  "Congratulations! You are a winner."
);
    res.json(draw);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};