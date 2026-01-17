import React, { useEffect, useState } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("/restaurantChains.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setAllData(resData);
      });
  }, []);

  const searchedData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-bold my-6">
        Restaurants with online food delivery in Mumbai
      </h2>

      <input
        type="text"
        placeholder="Search restaurants or cuisines..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full sm:w-[350px] px-4 py-2 border rounded-md mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length === 0
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : searchedData.map((item, index) => (
              <div key={index} className="card-hover">
                <Card {...item} index={index} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default OnlineDelivery;
