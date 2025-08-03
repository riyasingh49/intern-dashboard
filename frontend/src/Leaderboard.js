import React from "react";

export default function Leaderboard() {
  const leaderboard = [
    { name: "Alice", donations: 5000 },
    { name: "Jane Doe", donations: 3500 },
    { name: "Bob", donations: 2000 },
  ];

  return (
    <div className="container">
      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((p, idx) => (
          <li key={idx}>{p.name} — ₹{p.donations}</li>
        ))}
      </ol>
    </div>
  );
}
