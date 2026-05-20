import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Verify() {
  const [drawId, setDrawId] = useState("");
  const [proof, setProof] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/verification", { drawId, proof });
      alert("Submitted for verification");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Submit Proof</h2>

        <input
          placeholder="Draw ID"
          className="input"
          onChange={(e) => setDrawId(e.target.value)}
        />

        <input
          placeholder="Proof URL"
          className="input"
          onChange={(e) => setProof(e.target.value)}
        />

        <button onClick={handleSubmit} className="btn mt-4">
          Submit
        </button>
      </div>
    </>
  );
}