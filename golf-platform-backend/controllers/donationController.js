import User from "../models/User.js";
import Charity from "../models/Charity.js";

export const donate = async (req, res) => {
  const { amount, charityId } = req.body;

  const charity = await Charity.findById(charityId);
  const user = await User.findById(req.user._id);

  charity.totalReceived += amount;
  user.totalDonated += amount;

  await charity.save();
  await user.save();

  res.json({ message: "Donation successful" });
};