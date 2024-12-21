import React from "react";

const LargeButton = () => {
  return (
    <div className="flex w-[974px] h-[46px] absolute top-[700px] left-[232.5px] gap-[66px]">
      <div className="w-[219px] h-[46px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] gap-[10px] bg-[#ffffff]">
        <div className="w-[187px] h-[34px] font-medium text-xl leading-[34px] text-center tracking-tighter">
          Seamless Onboarding
        </div>
      </div>

      <div className="bg-[#ffffff] w-[210px] h-[46px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] gap-[10px]">
        <div className="w-[178px] h-[34px] font-medium text-xl leading-[34px] text-center tracking-tighter">
          Client Engagement
        </div>
      </div>
      <div className="bg-[#ffffff] w-[174px] h-[46px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] gap-[10px]">
        <div className="w-[142px] h-[34px] font-medium text-xl leading-[34px] text-center tracking-tighter">
          Generate report
        </div>
      </div>
      <div className="bg-[#ffffff] w-[173px] h-[46px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] gap-[10px]">
        <div className="w-[141px] h-[34px] font-medium text-xl leading-[34px] text-center tracking-tighter">
          Revenue Growth
        </div>
      </div>
    </div>
  );
};

export default LargeButton;
