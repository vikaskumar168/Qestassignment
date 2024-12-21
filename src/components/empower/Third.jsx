import React from "react";
import i1 from "./../../assets/Frame 53.png";
import i2 from "./../../assets/Frame 53 (1).png";
import i3 from "./../../assets/image.png";

const Third = () => {
  return (
    <div className="w-[1254px] h-[467px] absolute top-[324px] left-[100px]">
      <div className="w-[990px] h-[467px] mx-auto flex justify-between">
        {/* Card 1 */}
        <div className="w-[302px] h-[467px] flex flex-col">
          <img
            src={i1}
            alt="sports"
            className="w-[302px] h-[358px] rounded-lg"
          />
          <div className="mt-4">
            <div className="font-roboto font-semibold text-[28px] leading-[25px] text-[#1f1f1f]">
              Sports
            </div>
            <div className="font-roboto font-normal text-[14px] leading-[25px] text-[#475467]">
              From fitness studios to sports academies, Rmax empowers sports
              businesses
              <span className="text-[#0000ee]"> Know more...</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[302px] h-[467px] flex flex-col">
          <img
            src={i2}
            alt="healthcare"
            className="w-[302px] h-[358px] rounded-lg"
          />
          <div className="mt-4">
            <div className="font-roboto font-semibold text-[28px] leading-[25px] text-[#1f1f1f]">
              Healthcare & Wellness
            </div>
            <div className="font-roboto font-normal text-[14px] leading-[25px] text-[#475467]">
              Health and wellness service providers—from yoga instructors and
              gyms
              <span className="text-[#0000ee]"> Know more...</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[302px] h-[467px] flex flex-col">
          <img
            src={i3}
            alt="learning"
            className="w-[302px] h-[358px] rounded-lg"
          />
          <div className="mt-4">
            <div className="font-roboto font-semibold text-[28px] leading-[25px] text-[#1f1f1f]">
              Learning Activities
            </div>
            <div className="font-roboto font-normal text-[14px] leading-[25px] text-[#475467]">
              Tutors, educators, and learning centers—from music schools to art
              studios
              <span className="text-[#0000ee]"> Know more...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
