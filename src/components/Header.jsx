import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  return (
    <>
      {/* Overlay + Side Menu (Mobile) */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white h-full w-[260px] p-6 transition-transform duration-300 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-700">
            <li onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <IoIosSearch /> Search
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <CiDiscount1 /> Offers
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <IoHelpBuoySharp /> Help
            </li>

            {user ? (
              <li
                onClick={logout}
                className="cursor-pointer text-red-500"
              >
                Logout
              </li>
            ) : (
              <li
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              >
                Sign In
              </li>
            )}

            <li
              onClick={() => navigate("/cart")}
              className="cursor-pointer flex items-center gap-2"
            >
              <MdOutlineShoppingCart /> Cart ({cart.length})
            </li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <header className="shadow sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <button
              className="block md:hidden text-2xl"
              onClick={showSideMenu}
            >
              <HiMenuAlt3 />
            </button>

            {/* Logo */}
            <div
              className="w-[90px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src="/images/logo.png" className="w-full" alt="Logo" />
            </div>

            {/* Location (Hidden on small devices) */}
            <div className="hidden lg:block text-sm">
              <span className="font-bold border-b-2 border-black">
                Ratanada
              </span>{" "}
              Jodhpur, Rajasthan
              <RxCaretDown
                onClick={showSideMenu}
                fontSize={22}
                className="inline text-[#fc8019] cursor-pointer"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-[16px] font-semibold text-[#686b78]">
              <li className="cursor-pointer flex items-center gap-2 hover:text-[#fc8019]">
                <IoIosSearch /> Search
              </li>

              <li className="cursor-pointer flex items-center gap-2 hover:text-[#fc8019]">
                <CiDiscount1 />
                Offers <sup className="text-orange-500">New</sup>
              </li>

              <li className="cursor-pointer flex items-center gap-2 hover:text-[#fc8019]">
                <IoHelpBuoySharp /> Help
              </li>

              {user ? (
                <li
                  onClick={logout}
                  className="cursor-pointer hover:text-[#fc8019]"
                >
                  Logout
                </li>
              ) : (
                <li
                  onClick={() => navigate("/login")}
                  className="cursor-pointer hover:text-[#fc8019]"
                >
                  Sign In
                </li>
              )}

              <li
                onClick={() => navigate("/cart")}
                className="cursor-pointer flex items-center gap-2 hover:text-[#fc8019]"
              >
                <MdOutlineShoppingCart />
                Cart ({cart.length})
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
