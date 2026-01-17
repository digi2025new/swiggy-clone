import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center my-24">
      <h1 className="text-3xl font-bold text-green-600">
        🎉 Order Placed Successfully!
      </h1>

      <p className="mt-4 text-gray-600">
        Your delicious food is on the way 🚴‍♂️
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg"
      >
        Go to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
