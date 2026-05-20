import User from "../models/User.js";

export const subscribe = async (req, res) => {
  const { type, charityId } = req.body;

  const user = await User.findById(req.user.id);

  // 💰 simulate payment
  const paymentSuccess = true;

  if (!paymentSuccess) {
    return res.status(400).json({ message: "Payment failed" });
  }

  const startDate = new Date();
  const endDate = new Date();

  if (type === "monthly") {
    endDate.setMonth(endDate.getMonth() + 1);
  } else {
    endDate.setFullYear(endDate.getFullYear() + 1);
  }

  user.subscription = {
    type,
    status: "active",
    startDate,
    endDate,
  };

  user.charity = charityId;

  // donation logic
  const amount = type === "monthly" ? 500 : 5000;
  user.totalDonated += amount * 0.2;

  await user.save();

  res.json({
    message: "Subscription activated",
    subscription: user.subscription,
  });
};