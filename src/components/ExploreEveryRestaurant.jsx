import React from "react";

const ExploreEveryRestaurant = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 mt-16">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">
        Explore Every Restaurants Near Me
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="border rounded-xl px-6 py-4 text-center text-base font-medium cursor-pointer hover:shadow-md transition">
          Explore Restaurants Near Me
        </div>

        <div className="border rounded-xl px-6 py-4 text-center text-base font-medium cursor-pointer hover:shadow-md transition">
          Explore Top Rated Restaurants Near Me
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-b border-black"></div>
    </section>
  );
};

export default ExploreEveryRestaurant;
