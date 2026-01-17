import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  image,
  offer,
  title,
  rating,
  minTime,
  maxTime,
  name,
  place,
  index,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${index}`)}
      className="w-full cursor-pointer"
    >
      {/* Image */}
      <div className="group h-[180px] rounded-[16px] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.target.src = "/images/fallback.jpg";
          }}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-end p-2 text-[22px] font-bold text-white bg-gradient-to-t from-black/70 to-transparent">
          {offer}
        </div>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="text-lg font-bold truncate">{title}</h3>

        <div className="flex items-center text-sm mt-1 text-slate-800">
          ⭐ <span className="ml-1 font-semibold">{rating}</span>
          <span className="mx-2">•</span>
          <span>
            {minTime}-{maxTime} mins
          </span>
        </div>

        <p className="text-slate-600 text-sm truncate">{name}</p>
        <p className="text-slate-500 text-sm truncate">{place}</p>
      </div>
    </div>
  );
};


const Star = (props) => {
    return (
        <svg className={props.className} width={16} height={16} viewBox="0 0 16 16" fill="none">
  <circle
    cx="8.00005"
    cy="7.99999"
    r="7.2"
    fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"
  />
  <path
    d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
    fill="white"
  />
  <defs>
    <linearGradient
      id="StoreRating16_svg__paint0_linear_32982_71565"
      x1="8.00005"
      y1="0.799988"
      x2="8.00005"
      y2="15.2"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#21973B" />
      <stop offset={1} stopColor="#128540" />
    </linearGradient>
  </defs>
</svg>

    )
}

export default Card;
