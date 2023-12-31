import React, { useState } from "react";
import PurpleImage from "../assets/images/btn-option.png";
import PurpleImage2 from "../assets/images/btn-option-hover.png";

function BtnOption({ title, onFunction, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onFunction()}
      className="flex w-full cursor-pointer h-auto bg-[#7958AF] items-center justify-center text-white p-3 "
    >
      <div className=" z-10 p-[10px]">
        <h1 className="  ">
          {name}
          {"  "}
          {title}
        </h1>
      </div>
    </div>
  );
}

export default BtnOption;
