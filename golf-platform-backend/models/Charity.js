import mongoose from "mongoose";

const charitySchema = new mongoose.Schema({
  name: String,
  description: String,
  totalReceived: { type: Number, default: 0 },
});

export default mongoose.model("Charity", charitySchema);