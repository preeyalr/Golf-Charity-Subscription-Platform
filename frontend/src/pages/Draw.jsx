import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Draw() {
  const [draw, setDraw] = useState(null);

  const runDraw = async () => {
    const { data } = await API.get("/draw/run");
    setDraw(data);
  };

  return (
    <>
      <Navbar />
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
      <div className="p-6">
        <button onClick={runDraw} className="btn">
          Run Draw
        </button>

        {draw && (
          <div className="mt-4 space-y-2">
            <p><b>Numbers:</b> {draw.numbers.join(", ")}</p>
            <p><b>Total Pool:</b> ₹{draw.prizePool}</p>

            <p><b>5 Match Prize:</b> ₹{draw.distribution.match5}</p>
            <p><b>4 Match Prize:</b> ₹{draw.distribution.match4}</p>
            <p><b>3 Match Prize:</b> ₹{draw.distribution.match3}</p>
          </div>
          
        )}
      </div>
      </motion.div>
    </>
  );
}