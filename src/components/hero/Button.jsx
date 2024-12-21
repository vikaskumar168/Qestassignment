import React from "react";
import Smallbutton from "./../../assets/Small Button.png";
import bookdemo from "./../../assets/Book Demo.png";

const Button = () => {
  return (
    <div className="w-[270px] h-[49px] absolute top-[571px] left-[585px] flex justify-between border bg-[#e5e7eb]">
      <div className="w-[126px] h-[49px]  bg-[#e5e7eb] border-r">
        <img src={Smallbutton} alt="Get Started" />
      </div>
      <div className="w-[120px] h-[49px]">
        <img src={bookdemo} alt="Book a Demo" />
      </div>
    </div>
  );
};

export default Button;
