import React from "react";

import Navbar from "../hero/Navbar";
import SearchField from "../hero/SearchField";
import Main from "../hero/Main";
import Button from "../hero/Button";
import LargeButton from "../hero/LargeButton";

const Hero = () => {
  return (
    <div className="w-full h-[880px] flex flex-col items-center bg-[#f3f0f0]">
      <Navbar />
      <SearchField />
      <Main />
      <Button />
      <LargeButton />
    </div>
  );
};

export default Hero;
