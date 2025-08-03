import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const internName = localStorage.getItem("internName") || "Intern";

  useEffect(() => {
    fetch("http://localhost:4000/api/intern")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Welcome, {internName}</h2>
      <p>Referral Code: <strong>{data.referralCode}</strong></p>
      <p>Total Donations Raised: ₹{data.donationsRaised}</p>
      <h3>Rewards / Unlockables</h3>
      <ul>
        {data.rewards.map((r, i) => (
          <li key={i}>
            {r.title} — {r.unlocked ? "Unlocked ✅" : "Locked 🔒"}
          </li>
        ))}
      </ul>
    </div>
  );
}

