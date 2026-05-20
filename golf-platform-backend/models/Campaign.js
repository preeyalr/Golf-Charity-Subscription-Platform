import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  name: String,
  description: String,

  startDate: Date,
  endDate: Date,

  bonusMultiplier: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model("Campaign", campaignSchema);