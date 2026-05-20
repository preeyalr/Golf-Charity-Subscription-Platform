import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courseName: String,

    date: {
      type: Date,
      required: true,
    },

    holes: [
      {
        hole: Number,
        par: Number,
        strokes: Number,
      },
    ],

    stablefordPoints: {
      type: Number,
      min: 1,
      max: 45,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Score", scoreSchema);