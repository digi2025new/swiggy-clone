import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }
    clearCart();
    navigate("/success");
  };

  return (
    <div className="max-w-[700px] mx-auto px-4 my-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border rounded-lg p-4 mb-6"
      />

      <div className="text-lg font-semibold mb-6">
        Total Amount: ₹{total}
      </div>

      <button
        onClick={placeOrder}
        className="bg-green-600 text-white px-6 py-3 rounded-lg w-full"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
