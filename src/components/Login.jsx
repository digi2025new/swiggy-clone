import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }
    login(email);
    navigate("/");
  };

  return (
    <div className="max-w-[400px] mx-auto my-20 p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-orange-500 text-white py-3 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
