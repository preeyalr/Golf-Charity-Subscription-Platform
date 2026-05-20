import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function AddScore() {
  const [holes, setHoles] = useState(
    Array.from({ length: 18 }, (_, i) => ({
      hole: i + 1,
      par: 4,
      strokes: 4,
    }))
  );

  const [courseName, setCourseName] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (index, field, value) => {
    const updated = [...holes];
    updated[index][field] = Number(value);
    setHoles(updated);
  };

  const handleSubmit = async () => {
    try {
      await API.post("/score", {
        courseName,
        holes,
        date,
      });

      alert("Score added successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Add Score</h2>

        <input
          placeholder="Course Name"
          className="input"
          onChange={(e) => setCourseName(e.target.value)}
        />

        {/* 🔥 DATE FIELD */}
        <input
          type="date"
          className="input"
          onChange={(e) => setDate(e.target.value)}
        />

        {holes.map((h, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <span>Hole {i + 1}</span>

            <input
              type="number"
              value={h.par}
              onChange={(e) => handleChange(i, "par", e.target.value)}
            />

            <input
              type="number"
              value={h.strokes}
              onChange={(e) =>
                handleChange(i, "strokes", e.target.value)
              }
            />
          </div>
        ))}

        <button onClick={handleSubmit} className="btn mt-4">
          Submit
        </button>
      </div>
    </>
  );
}