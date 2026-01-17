import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const TopRest = () => {
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/restaurantChains.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4">
      <div className="flex items-center justify-between my-4">
        <h2 className="text-xl sm:text-2xl font-bold">
          Top Restaurant chains in Mumbai
        </h2>

        <div className="hidden sm:flex gap-2">
          <button onClick={scrollLeft} className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            <FaArrowLeft />
          </button>
          <button onClick={scrollRight} className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.length === 0
          ? Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="shrink-0 w-[220px]">
                  <SkeletonCard />
                </div>
              ))
          : data.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-[220px] card-hover"
              >
                <Card {...item} index={index} />
              </div>
            ))}
      </div>

      <div className="h-[2px] w-full bg-gradient-to-b from-gray-300/70 to-transparent mt-6"></div>
    </section>
  );
};

export default TopRest;
