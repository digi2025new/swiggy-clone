import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] mt-16">
      {/* ================= App Download Section ================= */}
      <div className="">
        <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl font-semibold text-center md:text-left">
            For better experience, download the Swiggy app now
          </h2>

          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* ================= Main Footer Content ================= */}
      <div className="max-w-[1200px] mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
              alt="Swiggy"
              className="h-8"
            />
          </div>
          <p className="text-gray-500">© 2026 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact us</h4>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h4 className="font-semibold mt-6 mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className="font-semibold mb-3">Available in:</h4>
          <ul className="space-y-2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>

          <select className="mt-4 w-full border rounded-md px-3 py-2 text-sm">
            <option>679 cities</option>
          </select>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Life at Swiggy</h4>
          <ul className="space-y-2 mb-6">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h4 className="font-semibold mb-3">Social Links</h4>
          <div className="flex gap-4 text-lg">
            <FaLinkedin className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaFacebook className="cursor-pointer hover:text-black" />
            <FaPinterest className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
