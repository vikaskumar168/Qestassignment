import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import search from "./../../assets/search.png";
import symbol from "./../../assets/symbol.png";
import path from "./../../assets/Path.png";

const Freq = () => {
  return (
    <div className="w-[724px] h-[691px]">
      {/* First top section */}
      <div className="w-[612px] h-[152px] mx-auto">
        <h1 className="font-urbanist font-bold text-[50px] leading-[56px] tracking-tighter text-center text-[#1f1f1f]">
          Frequently Asked Questions
        </h1>
        <p className="font-roboto font-normal text-[18px] leading-8 tracking-tight text-center text-[#475467] mt-4">
          Find answers to common questions about our services and features. For
          more details, contact our support team.
        </p>
      </div>

      {/* Search Field */}
      <div className="w-[722px] h-[48px] mt-[48px] rounded-lg border mx-auto relative flex">
        <input
          type="text"
          className="w-full h-full rounded-lg px-4 focus:outline-none"
          placeholder="Ask Q! e.g Tell me about key Features."
        />
        <div className="bg-[#f54f35] w-[51px] h-[48px] absolute left-[671px] rounded-r-lg">
          <img
            src={search}
            alt="search"
            className="absolute w-[22.5px] h-[22.5px] top-[50%] right-[15px] transform -translate-y-1/2"
          />
        </div>
      </div>

      {/* What is RMax */}
      <div className="w-[724px] h-[165px] mt-[40px] mx-auto">
        <div className="flex justify-between items-start">
          <h2 className="font-roboto font-semibold text-[20px] leading-8 tracking-tight text-[#1f1f1f]">
            What is RMax?
          </h2>
          <img src={symbol} alt="symbol" />
        </div>
        <p className="font-roboto font-normal text-[16px] leading-[29px] tracking-tight text-[#475467] opacity-70 mt-[20px]">
          Qest, is a SaaS platform/ecosystem that lets any small to medium
          service business setup & manage their business quickly & easily.
        </p>
      </div>

      {/* First Question */}
      <div className="w-[724px] h-[83px] mt-[20px] rounded-lg border-2 bg-[#ffffff] border-[#e5e7eb] flex justify-between items-center px-[28px]">
        <h2 className="font-roboto font-semibold text-[20px] leading-8 tracking-tighter text-[#1f1f1f]">
          How does it work?
        </h2>
        <img
          src={path}
          alt="arrow"
          className="w-[6px] h-[12px] border-[#1f1f1f]"
        />
      </div>

      {/* Second Question */}
      <div className="w-[724px] h-[83px] mt-[20px] rounded-lg border-2 bg-[#ffffff] border-[#e5e7eb] flex justify-between items-center px-[28px]">
        <h2 className="font-roboto font-semibold text-[20px] leading-8 tracking-tighter text-[#1f1f1f]">
          How much does it cost?
        </h2>
        <img
          src={path}
          alt="arrow"
          className="w-[6px] h-[12px] border-[#1f1f1f]"
        />
      </div>

      {/* Last Section */}
      <div className="w-[724px] h-[32px] mt-[40px] mx-auto flex justify-center items-center">
        <p className="font-roboto font-normal text-[18px] leading-[32px] tracking-tight text-[#1f1f1f]">
          Haven’t got your answer?
        </p>
        <Link
          to="/support" // Use the Link component for navigation
          className="font-roboto font-normal text-[18px] leading-[32px] tracking-tight text-[#0000ee] ml-2"
        >
          Contact our support now
        </Link>
      </div>
    </div>
  );
};

export default Freq;
