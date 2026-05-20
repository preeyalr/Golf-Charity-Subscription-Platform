import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function AdminVerification() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/verification").then((res) => setData(res.data));
  }, []);

  const handleAction = async (id, action) => {
    await API.post("/verification/review", { id, action });
    alert("Updated");
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Verification Panel</h2>

        {data.map((v) => (
          <div key={v._id} className="p-4 shadow mb-2">
            <p>User: {v.user}</p>
            <p>Status: {v.status}</p>

            <button onClick={() => handleAction(v._id, "approve")}>
              Approve
            </button>

            <button onClick={() => handleAction(v._id, "reject")}>
              Reject
            </button>
          </div>
        ))}
      </div>
    </>
  );
}