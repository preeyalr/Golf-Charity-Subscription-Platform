import axios from "axios";

export const subscribeUser = async () => {
  const res = await axios.post(
    "http://localhost:5000/api/payment/subscribe",
    {},
    { withCredentials: true }
  );

  return res.data;
};