import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  subscription: {
    type: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "expired",
    },
    startDate: Date,
    endDate: Date,
  },

  charity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Charity",
  },

  // 🔥 NEW
  charityPercentage: {
    type: Number,
    default: 10,
  },

  totalDonated: {
    type: Number,
    default: 0,
  },
  country: {
  type: String,
  default: "India",
},

currency: {
  type: String,
  default: "INR",
},
team: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Team",
},
});

export default mongoose.model("User", userSchema);