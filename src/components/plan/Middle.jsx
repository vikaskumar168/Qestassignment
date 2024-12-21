import React from "react";
import toggle from "./../../assets/Toggle.png";
import save from "./../../assets/Tag.png";
import pricing1 from "./../../assets/Pricing.png";
import pricing2 from "./../../assets/Pricing (1).png";

const Middle = () => {
  return (
    <div className="w-[1045px] h-[649px] absolute top-[338px] left-[197px]">
      <div className="w-[334px] h-[34px] absolute left-[356px]">
        <div
          className="w-[64px] h-[32px] absolute left-[6px]
        font-roboto font-normal text-[18px] leading-8 tracking-tighter text-right text-[#1f1f1f]"
        >
          Monthly
        </div>
        <div className="w-[72px] h-[33px] absolute top-[1px] left-[86px]">
          <img src={toggle} alt="toggle" />
        </div>
        <div
          className="w-[48px] h-[32px] absolute left-[174px]
        font-roboto font-normal text-[18px] leading-8 tracking-tighter text-[#1f1f1f]"
        >
          Yearly
        </div>
        <div className="w-[95px] h-[29px] absolute top-[2px] left-[239px]">
          <img src={save} alt="save" />
        </div>
      </div>
      <div className="w-[683px] h-[567px] absolute top-[82px] left-[181px] flex">
        <div className="w-[327px] h-[567px] top-[82px] left-[181px]">
          <img src={pricing1} alt="pricing" />
        </div>
        <div className="w-[327px] h-[567px] top-[82px] left-[537px]">
          <img src={pricing2} alt="pricing" />
        </div>
      </div>
    </div>
  );
};

export default Middle;
