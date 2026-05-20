export const checkSubscription = (req, res, next) => {
  const user = req.user;

  if (!user.subscription || user.subscription.status !== "active") {
    return res.status(403).json({
      message: "Subscription required",
    });
  }

  // check expiry
  if (new Date(user.subscription.endDate) < new Date()) {
    return res.status(403).json({
      message: "Subscription expired",
    });
  }

  next();
};