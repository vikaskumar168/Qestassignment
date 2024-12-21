import React from "react";
import img1 from "./../../assets/0.png";
import img2 from "./../../assets/Frame 8397.png";

const Footer = () => {
  return (
    <div className="w-full h-[565px] top-[5798px] relative bg-[#f8f9fa]">
      {/* First Image Section */}
      <div className="absolute w-[1250px] h-[247px] top-[121px] left-[95px]">
        <img src={img1} alt="footer" className="w-full h-auto object-contain" />
      </div>

      {/* Second Image Section */}
      <div className="absolute w-[1111px] h-[58px] top-[475px] left-[165px]">
        <img src={img2} alt="footer" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Footer;
