import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-8">

      <h1 className="text-3xl font-bold">⚙️ Admin Dashboard</h1>

      {/* 👥 User Management */}
      <div className="card p-4">
        <h2 className="font-bold text-xl mb-2">👥 User Management</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li><Link to="/admin/users">View & Edit Users</Link></li>
          <li><Link to="/admin/scores">Edit Golf Scores</Link></li>
          <li><Link to="/admin/subscriptions">Manage Subscriptions</Link></li>
        </ul>
      </div>

      {/* 🎟 Draw Management */}
      <div className="card p-4">
        <h2 className="font-bold text-xl mb-2">🎟 Draw Management</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li><Link to="/admin/draw-config">Configure Draw Logic</Link></li>
          <li><Link to="/admin/simulate-draw">Run Simulations</Link></li>
          <li><Link to="/admin/publish-draw">Publish Results</Link></li>
        </ul>
      </div>

      {/* ❤️ Charity Management */}
      <div className="card p-4">
        <h2 className="font-bold text-xl mb-2">❤️ Charity Management</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li><Link to="/admin/charities">Add / Edit / Delete Charities</Link></li>
          <li><Link to="/admin/content">Manage Content & Media</Link></li>
        </ul>
      </div>

      {/* 🏆 Winners Management */}
      <div className="card p-4">
        <h2 className="font-bold text-xl mb-2">🏆 Winners Management</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li><Link to="/admin/winners">View Winners</Link></li>
          <li><Link to="/admin/verification">Verify Submissions</Link></li>
          <li><Link to="/admin/payouts">Mark Payouts</Link></li>
        </ul>
      </div>

      {/* 📊 Reports */}
      <div className="card p-4">
        <h2 className="font-bold text-xl mb-2">📊 Reports & Analytics</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li><Link to="/admin/stats">Total Users</Link></li>
          <li><Link to="/admin/revenue">Total Prize Pool</Link></li>
          <li><Link to="/admin/charity-report">Charity Contributions</Link></li>
          <li><Link to="/admin/draw-stats">Draw Statistics</Link></li>
        </ul>
      </div>

    </div>
  );
}