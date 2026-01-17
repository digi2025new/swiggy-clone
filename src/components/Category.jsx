import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Category = () => {
  const [categories, setCategory] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4">
      
      {/* Header */}
      <div className="flex items-center justify-between my-4">
        <h2 className="text-xl sm:text-2xl font-bold">
          What's on your mind?
        </h2>

        {/* Scroll buttons (hidden on small screens) */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[90px] sm:min-w-[120px] flex flex-col items-center text-center cursor-pointer"
          >
            <img
              src={`/images/${cat.image}`}
              alt={cat.path}
              className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm font-medium">
              {cat.path}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[2px] w-full bg-gradient-to-b from-gray-300/70 to-transparent mt-6"></div>

    </section>
  );
};

export default Category;
