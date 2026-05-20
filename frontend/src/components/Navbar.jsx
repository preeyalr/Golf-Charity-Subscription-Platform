import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // 🔥 Fetch user (optional – if you have /me route)
  useEffect(() => {
    API.get("/user/me") // create this if not exists
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout"); // 🍪 clears cookie
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-700 to-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Golf Platform</h1>

      <div className="space-x-4 flex items-center">

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-score">Score</Link>
        <Link to="/ticket">Ticket</Link>
        <Link to="/charities">Charities</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/verify">Verify</Link>
        <Link to="/admin/verification">Admin Verify</Link>

        {user && <Link to="/subscribe">Subscribe</Link>}
        {user && <Link to="/draw">Draw</Link>}

        {/* 🔥 ADMIN ONLY */}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}

        {/* 🔴 LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </div>
  );
}