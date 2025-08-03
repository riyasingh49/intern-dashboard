import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("internName", name);
    nav("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Intern Login / Signup</h2>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <button type="submit">Enter Dashboard</button>
    </form>
  );
}
