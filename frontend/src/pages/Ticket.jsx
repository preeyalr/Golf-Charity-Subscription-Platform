import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Ticket() {
  const [numbers, setNumbers] = useState([]);

  const handleAdd = (num) => {
    if (numbers.includes(num) || numbers.length === 5) return;
    setNumbers([...numbers, num]);
  };

  const handleSubmit = async () => {
    await API.post("/ticket", { numbers });
    alert("Ticket submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Pick 5 Numbers</h2>

        <div className="grid grid-cols-10 gap-2 mt-4">
          {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => handleAdd(n)}
              className="border p-2"
            >
              {n}
            </button>
          ))}
        </div>

        <p className="mt-4">Selected: {numbers.join(", ")}</p>

        <button onClick={handleSubmit} className="btn mt-4">
          Submit Ticket
        </button>
      </div>
    </>
  );
}