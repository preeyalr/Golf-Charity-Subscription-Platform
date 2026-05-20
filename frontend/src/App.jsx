import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddScore from "./pages/AddScore";
import Subscribe from "./pages/Subscribe";
import Draw from "./pages/Draw";
import Admin from "./pages/Admin";
import Ticket from "./pages/Ticket";
import Charities from "./pages/Charities";
import Donate from "./pages/Donate";
import Verify from "./pages/Verify";
import AdminVerification from "./pages/AdminVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/donate" element={<Donate />} />
<Route path="/verify" element={<Verify />} />
<Route path="/admin/verification" element={<AdminVerification />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-score" element={<AddScore />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/draw" element={<Draw />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;