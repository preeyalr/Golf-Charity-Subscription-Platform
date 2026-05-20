import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Charities() {
  const [charities, setCharities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/charity?search=" + search).then((res) =>
      setCharities(res.data)
    );
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Charities</h2>

        <input
          placeholder="Search..."
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />

        {charities.map((c) => (
          <div key={c._id} className="p-4 shadow mt-2 rounded">
            <img src={c.image} alt="" className="h-32 w-full object-cover" />
            <h3 className="font-bold">{c.name}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}