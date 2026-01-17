import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }
    signup(email);
    navigate("/");
  };

  return (
    <div className="max-w-[400px] mx-auto my-20 p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="w-full bg-green-600 text-white py-3 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
