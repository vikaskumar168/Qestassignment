import React from "react";
import Navbar from "./hero/Navbar";
import SearchField from "./hero/SearchField";
import search from "./../assets/search.png";
import phone from "./../assets/phone.png";
import but from "./../assets/but.png";
import container from "./../assets/Container.png";
import Foot from "./LandingPage/Foot";

const Support = () => {
  return (
    <div className="bg-[#f3f0f0]">
      
      <Navbar />
      <SearchField />

      <div className="w-[822.26px] h-[162px] absolute top-[238px] left-[200px] gap-[59.89px]">
        <div
          className="w-[822.26px] h-[120px] font-urbanist
         font-bold text-[60px] leading-[60px] tracking-tighter text-[#1f1f1f]"
        >
          Get in touch with us. We're here to assist you.
        </div>
      </div>
      {/* //create componet for below two lines */}
      <div className="w-[503px] h-[106px] absolute top-[443px] left-[194px]">
        <div className="w-[503px] h-[24px] font-roboto font-normal text-[16px] leading-5">
          Business Name
          <span className="font-roboto font-normal text-[16px] leading-5 text-[#F54F35]">
            *
          </span>
        </div>
        <div>
          <input
            type="text"
            className="w-[503px] h-[74px] gap-1 rounded-lg px-4 focus:outline-none"
            placeholder="Search for your business listing"
          />
          <img
            src={search}
            alt="search"
            className="absolute w-[19.5px] h-[19.5px] top-[50%] right-[15px] bg-[#cacaca] transform -translate-y-1/2"
          />
        </div>
      </div>

      <div className="w-[503px] h-[106px] absolute top-[443px] left-[747px] gap-2">
        <div className="w-[503px] h-[24px] font-roboto font-normal text-[16px] leading-5">
          Your Name
          <span className="font-roboto font-normal text-[16px] leading-5 text-[#F54F35]">
            *
          </span>
        </div>
        <div>
          <input
            type="text"
            className="w-[503px] h-[74px] gap-1 rounded-lg px-4 focus:outline-none"
            placeholder="Enter Your Name"
          />
        </div>
      </div>

      <div className="w-[505px] h-[106px] absolute top-[589px] left-[192px]">
        <div className="w-[503px] h-[24px] font-roboto font-normal text-[16px] leading-5">
          Phone Number
          <span className="font-roboto font-normal text-[16px] leading-5 text-[#F54F35]">
            *
          </span>
          <img src={phone} alt="phone" />
        </div>
        <div></div>
      </div>

      <div className="w-[503px] h-[106px] absolute top-[589px] left-[747px] gap-2">
        <div className="w-[503px] h-[24px] font-roboto font-normal text-[16px] leading-5">
          Email Address
          <input
            type="text"
            className="w-[503px] h-[74px] gap-1 rounded-lg px-4 focus:outline-none"
            placeholder="e.g xyz@gmail.com"
          />
        </div>
        {/* <div></div> */}
      </div>

      <div className="w-[1056px] h-[155px] absolute top-[735px] left-[192px] gap-2">
        <div className="w-[1056px] h-[24px] font-roboto font-normal text-[16px] leading-5">
          Message
          <span className="font-roboto font-normal text-[16px] leading-5 text-[#F54F35]">
            *
          </span>
          <input
            type="text"
            className="w-[1056px] h-[123px] gap-1 rounded-lg px-4 focus:outline-none bg-[#ffffff]"
            placeholder="Write here your message..."
          />
        </div>
      </div>

      <div className="w-[225px] h-[62px] absolute top-[950px] left-[192px]">
        <img src={but} alt="button" />{" "}
      </div>

      <div className="w-[1437px] h-[340px] absolute top-[1080px] left-[1px]">
        <img src={container} alt="container" />
      </div>
      <div className="w-full h-[565px] absolute top-[1420px]">
        <Foot />
      </div>
    </div>
  );
};

export default Support;
