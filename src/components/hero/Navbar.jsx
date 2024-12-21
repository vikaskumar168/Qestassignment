import React from "react";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div
      className="w-[1056px] h-[54px] flex items-center justify-between bg-[#ffffff]"
      style={{
        position: "absolute",
        top: "20px",
        left: "192px",
      }}
    >
      <Nav />
    </div>
  );
};

export default Navbar;
