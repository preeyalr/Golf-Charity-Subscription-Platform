import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../services/api";

export default function Login() {
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/login", {
        ...form,
        role,
      });

      // 🍪 cookie handled automatically
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded w-full max-w-md space-y-4">

        <h2 className="text-xl font-bold text-center">Login</h2>

        {/* 🔥 Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 rounded bg-gray-800"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-800"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="btn w-full">Login</button>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}