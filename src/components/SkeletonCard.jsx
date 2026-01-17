import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="skeleton h-[140px] rounded-md mb-4"></div>
      <div className="skeleton h-4 w-3/4 mb-2"></div>
      <div className="skeleton h-4 w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
