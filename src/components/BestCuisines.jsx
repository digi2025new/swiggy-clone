import React, { useState } from "react";
import { initialCuisines, moreCuisines } from "../data/cuisines";

const BestCuisines = () => {
  const [showMore, setShowMore] = useState(false);

  const cuisines = showMore
    ? [...initialCuisines, ...moreCuisines]
    : initialCuisines;

  return (
    <section className="max-w-[1200px] mx-auto px-4 my-12">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        Best Cuisines Near Me
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {cuisines.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl px-4 py-4 sm:px-6 sm:py-5
                       text-center font-medium text-gray-800
                       card-hover cursor-pointer"
          >
            {item}
          </div>
        ))}

        {/* Show More / Less */}
        <div
          onClick={() => setShowMore(!showMore)}
          className="border rounded-xl px-4 py-4 sm:px-6 sm:py-5
                     text-center font-semibold text-orange-500
                     card-hover cursor-pointer"
        >
          {showMore ? "Show Less ↑" : "Show More ↓"}
        </div>
      </div>
    </section>
  );
};

export default BestCuisines;
