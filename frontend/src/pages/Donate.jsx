import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [charityId, setCharityId] = useState("");

  const handleDonate = async () => {
    await API.post("/donation", { amount, charityId });
    alert("Thank you for donating ❤️");
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Donate</h2>

        <input
          placeholder="Amount"
          className="input"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          placeholder="Charity ID"
          className="input"
          onChange={(e) => setCharityId(e.target.value)}
        />

        <button onClick={handleDonate} className="btn mt-4">
          Donate
        </button>
      </div>
    </>
  );
}