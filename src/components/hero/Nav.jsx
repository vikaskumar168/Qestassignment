import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import rmax from "../../assets/RMax.png";
import feat from "../../assets/Features.png";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      {/* Logo */}
      <div>
        <img
          src={rmax}
          alt="logo"
          style={{
            width: "28px",
            height: "11px",
            position: "absolute",
            top: "17px",
            left: "18px",
          }}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-8 relative">
        <Link to="/" className="text-xs font-medium leading-5">
          Home
        </Link>

        {/* Features Dropdown */}
        <div className="relative">
          <button
            className="text-xs font-medium leading-5"
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            Features
          </button>
          {showDropdown && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[772px] h-[424px] max-h-screen overflow-auto bg-[#ffffff] rounded-b-lg z-50 shadow-lg">
              <img
                src={feat} // Replace with your image
                alt="Feature Image"
                className="w-full h-full object-cover rounded"
              />
              <button
                onClick={() => setShowDropdown(false)}
                className="absolute top-2 right-2 text-black bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <Link to="/pricing" className="text-xs font-medium leading-5">
          Pricing
        </Link>
        <Link to="/solutions" className="text-xs font-medium leading-5">
          Solutions
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="w-[61px] h-[38px] bg-transparent border border-gray-200 text-black text-xs font-medium leading-5 pt-[6px] pr-[13px] pb-[9px] pl-[13px]">
          Login
        </button>
        <button className="w-[101px] h-[38px] bg-[#f54f35] text-white text-xs font-medium leading-5 pt-[9px] pb-[9px] pl-[13px] pr-[13px]">
          Try for Free
        </button>
      </div>
    </>
  );
};

export default Nav;
