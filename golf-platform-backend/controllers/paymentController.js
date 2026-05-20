import Stripe from "stripe";
import User from "../models/User.js";

// 💳 Create Checkout Session
export const createCheckoutSession = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET); // ✅ move here

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: "Golf Subscription" },
            unit_amount: 10000,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: req.user._id.toString(),
      },
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.log("Stripe Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};