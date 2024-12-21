import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import rmax from "../../assets/RMax.png";

const Navbar = () => {
  return (
    <div
      className="w-[1056px] h-[54px] flex items-center justify-between bg-[#ffffff]"
      style={{
        position: "absolute",
        top: "20px",
        left: "192px",
      }}
    >
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
      <nav className="flex gap-8">
        <Link to="/" className="text-xs font-medium leading-5">
          Home
        </Link>
        <Link to="/features" className="text-xs font-medium leading-5">
          Features
        </Link>
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
    </div>
  );
};

export default Navbar;
