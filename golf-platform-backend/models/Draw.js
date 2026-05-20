import mongoose from "mongoose";

const drawSchema = new mongoose.Schema(
  {
    month: String,

    numbers: [Number],

    winners: {
      match5: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      match4: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      match3: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },

    prizePool: Number,

    distribution: {
      match5: Number,
      match4: Number,
      match3: Number,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Draw", drawSchema);