import React from "react";
import ai from "./../../assets/AI.png";
import rmax from "../../assets/RMax.png";

const SearchField = () => {
  return (
    <div className="w-[456px] h-[58px] absolute top-[170px] left-[492px] flex items-center bg-white rounded-tl-[9.75px] rounded-br-[8px] border border-gray-300 shadow-sm">
      {/* Left Section */}
      <div className="w-[71.88px] h-[58.48px] flex items-center justify-center gap-[8px] rounded-tl-[8px] rounded-bl-[8px] border-r border-gray-300">
        <div className="flex flex-col items-center">
          <img src={ai} alt="AI" className="w-[17px] h-[20px] mb-1" />
          <img src={rmax} alt="RMax" className="w-[52px] h-[20px]" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[382.56px] h-[58.48px] flex items-center pl-4">
        <p className="text-gray-400 text-sm">
          Curious? Let AI Uncover the Answers!
        </p>
      </div>
    </div>
  );
};

export default SearchField;
