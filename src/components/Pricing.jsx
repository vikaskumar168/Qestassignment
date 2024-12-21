import React from "react";
import Navbar from "./hero/Navbar";
import Footer from "./LandingPage/Footer";
import imgg from "./../assets/Group 2128.png";
import Freq from "./LandingPage/Freq";

const Pricing = () => {
  return (
    <>
      <Navbar />
      {/* Title Section */}
      <div className="w-[672px] h-[120px] mx-auto mt-[135px] px-[51.42px]">
        <div className="w-[569.16px] h-[120px] font-urbanist font-bold text-[60px] leading-[60px] tracking-tighter text-center text-[#1f1f1f]">
          Flexible Plans, Transparent Pricing
        </div>
      </div>

      {/* Subheading Section */}
      <div className="w-[346px] h-[64px] mx-auto mt-[20px] font-roboto font-normal text-[16px] leading-8 tracking-tight text-center">
        <span className="text-[#475467]">Find the Perfect Fit for You</span>
        <br />
        <span className="text-[#f54f35]">
          30-day free trial with money-back guarantee.
        </span>
      </div>

      {/* Image Section */}
      <div className="w-[734px] h-[677px] mx-auto mt-[40px]">
        <img src={imgg} alt="img" className="block mx-auto" />
      </div>

      {/* Frequently Section */}
      <div className="w-[734px] mx-auto mt-[40px] text-center">
        <Freq />
      </div>

      {/* Footer Section */}
      <div className="w-full h-auto mt-[20px]">
        <Footer />
        {/* wrap footer in foot other than outer div  */}
      </div>
    </>
  );
};

export default Pricing;
