import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="max-w-[800px] mx-auto px-4 my-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between gap-4 border p-4 rounded-lg mb-4"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.name}</p>
                <p className="font-semibold">₹{item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.title)}
                  className="px-3 py-1 border rounded btn-animate"
                >
                  −
                </button>
                <span className="font-semibold">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.title)}
                  className="px-3 py-1 border rounded btn-animate"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold">
            Total: ₹{total}
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg w-full btn-animate"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;
