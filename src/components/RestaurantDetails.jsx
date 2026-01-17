import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/restaurantChains.json")
      .then((res) => res.json())
      .then((data) => setRestaurant(data[id]));
  }, [id]);

  if (!restaurant) {
    return (
      <div className="max-w-[1000px] mx-auto px-4 my-10">
        <div className="skeleton h-[250px] rounded-xl mb-6"></div>
        <div className="skeleton h-6 w-1/2 mb-4"></div>
        <div className="skeleton h-4 w-1/3"></div>
      </div>
    );
  }

  return (
    <section className="max-w-[1000px] mx-auto px-4 my-10">
      <img
        src={restaurant.image}
        alt={restaurant.title}
        className="w-full h-[250px] object-cover rounded-xl"
      />

      <h1 className="text-2xl sm:text-3xl font-bold mt-6">
        {restaurant.title}
      </h1>
      <p className="text-gray-600 mt-2">{restaurant.name}</p>

      <button
        onClick={() => addToCart(restaurant)}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg btn-animate"
      >
        Add to Cart
      </button>
    </section>
  );
};

export default RestaurantDetails;
