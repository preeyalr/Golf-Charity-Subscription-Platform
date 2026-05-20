import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Subscribe() {
  const [charities, setCharities] = useState([]);
  const [selected, setSelected] = useState("");
  const [type, setType] = useState("monthly");

  useEffect(() => {
    API.get("/charity").then((res) => setCharities(res.data));
  }, []);

  const handleSubscribe = async () => {
    const { data } = await API.post("/subscription", {
      type,
      charityId: selected,
    });

    alert("Subscription Active till: " + data.subscription.endDate);
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Choose Plan</h2>

        <select onChange={(e) => setType(e.target.value)}>
          <option value="monthly">Monthly - ₹500</option>
          <option value="yearly">Yearly - ₹5000</option>
        </select>

        <h3 className="mt-4">Select Charity</h3>
        {charities.map((c) => (
          <div key={c._id}>
            <input
              type="radio"
              onChange={(e) => setSelected(e.target.value)}
              value={c._id}
            />
            {c.name}
          </div>
        ))}

        <button onClick={handleSubscribe} className="btn mt-4">
          Subscribe
        </button>
      </div>
    </>
  );
}