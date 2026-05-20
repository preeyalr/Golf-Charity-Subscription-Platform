import User from "../models/User.js";
import Score from "../models/Score.js";
import Draw from "../models/Draw.js";
import Charity from "../models/Charity.js";
import Verification from "../models/Verification.js";

// 📊 dashboard stats
export const getDashboardStats = async (req, res) => {
  const totalUsers = await User.countDocuments();

  const totalPrizePool = await Draw.aggregate([
    { $group: { _id: null, total: { $sum: "$prizePool" } } },
  ]);

  const totalDonations = await Charity.aggregate([
    { $group: { _id: null, total: { $sum: "$totalReceived" } } },
  ]);

  const totalDraws = await Draw.countDocuments();

  res.json({
    totalUsers,
    totalPrizePool: totalPrizePool[0]?.total || 0,
    totalDonations: totalDonations[0]?.total || 0,
    totalDraws,
  });
};

// 👥 users
export const getUsers = async (req, res) => {
  const users = await User.find().populate("charity");
  res.json(users);
};

// 🏌️ scores edit
export const deleteScore = async (req, res) => {
  await Score.findByIdAndDelete(req.params.id);
  res.json({ message: "Score deleted" });
};

// ❤️ charities
export const createCharity = async (req, res) => {
  const charity = await Charity.create(req.body);
  res.json(charity);
};

export const deleteCharity = async (req, res) => {
  await Charity.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// 🏆 winners
export const getWinners = async (req, res) => {
  const data = await Verification.find().populate("user draw");
  res.json(data);
};

// 💰 mark payout
export const markPaid = async (req, res) => {
  const v = await Verification.findById(req.params.id);
  v.paymentStatus = "paid";
  await v.save();
  res.json(v);
};