import React from "react";
import Top from "../plan/Top";
import Middle from "../plan/Middle";

const Plan = () => {
  return (
    <div className="bg-[#f3f0f0] w-full h-[1099px] absolute top-[3499px]">
      <Top />
      <Middle />
      <div className="w-[222px] h-[32px] absolute top-[1007px] left-[609px]">
        <div className="w-[222px] h-[32px] font-robototext-[18px]leading-[32px] tracking-tighter font-normal decoration-solid underline text-[#0000ee]">
          Explore In-Depth Differences
        </div>
      </div>
    </div>
  );
};

export default Plan;
