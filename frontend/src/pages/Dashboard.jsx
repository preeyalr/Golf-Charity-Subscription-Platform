import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log("ERROR:", err.response?.data || err.message);
      });
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">

        {/* 🔥 Subscription */}
        <div className="p-4 shadow rounded">
          <h2 className="font-bold text-lg">Subscription</h2>
          <p>Status: {data.subscription?.status}</p>
          <p>
            Renewal:{" "}
            {data.subscription?.endDate
              ? new Date(data.subscription.endDate).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

        {/* ❤️ Charity */}
        <div className="p-4 shadow rounded">
          <h2 className="font-bold text-lg">Charity</h2>
          <p>{data.charity?.name}</p>
          <p>Contribution: {data.charityPercentage}%</p>
        </div>

        {/* 🏌️ Scores */}
        <div className="p-4 shadow rounded">
          <h2 className="font-bold text-lg">Scores</h2>

          {data.scores?.map((s) => (   // ✅ safe optional chaining
            <div key={s._id}>
              {s.courseName} - {s.stablefordPoints}
            </div>
          ))}
        </div>

        {/* 🎟 Participation */}
        <div className="p-4 shadow rounded">
          <h2 className="font-bold text-lg">Draw Participation</h2>
          <p>Tickets Entered: {data.ticketsCount}</p>
        </div>

        {/* 💰 Winnings */}
        <div className="p-4 shadow rounded">
          <h2 className="font-bold text-lg">Winnings</h2>
          <p>Total Won: ₹{data.totalWon}</p>

          {data.verifications?.map((v) => (   // ✅ safe optional chaining
            <div key={v._id}>
              Status: {v.paymentStatus}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}