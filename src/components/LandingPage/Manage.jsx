import React from "react";
import apple from "./../../assets/Apple logo.png";
import playstore from "./../../assets/Logo (3).png";

const Manage = () => {
  return (
    <div className="bg-[#f3f0f0] w-full h-[389px] absolute top-[4598px]">
      <div className="w-[703px] h-[56px] absolute top-[60px] left-[368px] font-urbanist text-[#1f1f1f] text-[40px] leading-[56px] font-bold tracking-tight text-center">
        Manage Your Business On the Go
      </div>
      <div className="w-[700px] h-[64px] absolute top-[136px] left-[370px] font-roboto font-normal text-[18px] leading-8 text-center tracking-tight">
        With free Business Mobile App, you can manage your entire service
        business from anywhere. Stay connected and stay in control, no matter
        where your day takes you.
      </div>
      <div className="w-[430px] h-[74px] absolute top-[255px] left-[505px] relative">
        {/* Add 'relative' to this div */}
        <div className="w-[205px] h-[74px] absolute top-0 left-0">
          <img
            src={apple}
            alt="apple logo"
            className="w-[33.09px] h-[40.5px] absolute top-[16.58px] left-[19.35px]"
          />
          <div className="w-[124.68px] h-[26px] absolute top-[25.83px] left-[61.22px]">
            App Store
          </div>
        </div>
        <div className="w-[201px] h-[74px] absolute top-0 left-[229px]">
          <img
            src={playstore}
            alt="Playstore"
            className="w-[34.4px] h-[38.07px] absolute top-[18.15px] left-[19.37px]"
          />
          <div className="w-[119.3px] h-[23.7px] absolute top-[25.41px] left-[62.46px]">
            Google Play
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
