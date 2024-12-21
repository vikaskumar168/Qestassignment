import React from "react";

const Top = () => {
  return (
    <>
      <div
        className="w-[414px] h-[112px] absolute top-[60px] left-[513px]
      font-urbanist text-center leading-[56px] text-[50px] font-bold tracking-tighter text-[#1f1f1f]"
      >
        Choose Plan That’s Right For You
      </div>
      <div
        className="w-[600px] h-[59px] absolute top-[192px] left-[420px]
  font-roboto font-normal text-[19px] leading-[29px] tracking-tight text-center"
      >
        <span className="text-[#475467]">
          Simple and transparent pricing. Start for free, upgrade when you love
          it.
        </span>
        <br />
        <span className="text-[#a10f0f]">30 day free trial in a button</span>
      </div>

      <div className="w-[503px] h-[29px] relative top-[277px] left-[468px]">
        <div
          className="w-[396px] h-[29px] absolute top-0 left-0
    font-roboto font-normal text-[16px] leading-[29px] tracking-tighter text-center text-[#1f1f1f]"
        >
          Running a Growth Business or Enterprise? Let's connect -{" "}
        </div>
        <div className="w-[99px] h-[29px] absolute top-0 right-0 bg-[#f54f35] rounded-lg flex items-center justify-center">
          <button
            className="w-[80px] h-[29px]
      font-roboto font-normal text-[14px] leading-[29px] tracking-tighter text-center text-[#ffffff]"
          >
            Talk to Sales
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;
