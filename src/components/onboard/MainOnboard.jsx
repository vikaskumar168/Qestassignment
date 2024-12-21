import React from "react";
import photo from "./../../assets/Frame 155.png";
const MainOnboard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-[1120px] h-[371px] absolute top-[265px] left-[160px]">
      <img src={photo} alt="image" />
    </div>
  );
};

export default MainOnboard;
