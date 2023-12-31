import React, { useState } from "react";
import PurpleImage from "../assets/images/button-purple.png";
import PurpleImage2 from "../assets/images/button-purple2.png";

const Button3 = ({ title, onFunction, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onFunction()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
      className="flex cursor-pointer bg-[#7958AF] w-full h-[50px] lg:h-[70px] justify-center items-center "
    >
      <h1 className=" font-bold text-white z-10 text-[1rem]">{title}</h1>
    </div>
  );
};

export default Button3;
