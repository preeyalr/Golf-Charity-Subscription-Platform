import React from "react";
import { subscribeUser } from "../services/payment";

const SubscribeButton = () => {
  const handleSubscribe = async () => {
    try {
      const data = await subscribeUser();

      // 🔥 Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
    >
      Subscribe Now
    </button>
  );
};

export default SubscribeButton;