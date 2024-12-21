import React from "react";

const Main = () => {
  return (
    <div className="w-[787px] h-[208px] absolute top-[303px] left-[326px] text-center">
      {/* Title Section */}
      <div className="w-[672px] h-[132px] max-w-[672px] mx-auto">
        <h1 className="text-[48px] font-bold leading-tight text-black">
          Maximize Your Impact{" "}
          <span className="text-red-600">Business with RMax</span>
        </h1>
      </div>

      {/* Subtitle Section */}
      <div className="w-[787px] h-[56px] mt-4">
        <p className="text-[16px] text-gray-500 leading-relaxed">
          Enhance your business with Rmax's all-in-one platform—streamlining
          client engagement, automating workflows, and fueling growth.
        </p>
      </div>
    </div>
  );
};

export default Main;
