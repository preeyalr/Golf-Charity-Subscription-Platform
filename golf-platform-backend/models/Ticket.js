import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  numbers: [Number], // 5 numbers
  month: String,
});

export default mongoose.model("Ticket", ticketSchema);