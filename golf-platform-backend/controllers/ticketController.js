import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  const { numbers } = req.body;

  if (numbers.length !== 5) {
    return res.status(400).json({ message: "Pick 5 numbers" });
  }

  const ticket = await Ticket.create({
    user: req.user._id,
    numbers,
    month: new Date().toLocaleString("default", { month: "long" }),
  });

  res.json(ticket);
};