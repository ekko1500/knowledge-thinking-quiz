import React, { useState } from "react";
import PurpleImage from "../assets/images/btn-white-purple.png";
import PurpleImage2 from "../assets/images/btn-white-purple-hover.png";

const Button4 = ({ title, onFunction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onFunction()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
      className="flex cursor-pointer bg-white w-full h-[50px] lg:h-[80px] justify-center items-center "
    >
      <h1 className=" font-bold z-10 text-[1rem]">{title}</h1>
    </div>
  );
};

export default Button4;
