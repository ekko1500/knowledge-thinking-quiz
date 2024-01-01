import React from "react";
import clock from "../assets/images/clock.png";
import ButtonImage from "./ButtonImage";
import Button3 from "./Button3";
import aboutBg from "../assets/images/about.png";

function ConfirmBox({ onStart, onBack }) {
  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className="w-[95%] lg:w-[50%] flex flex-col items-center   ">
        {/* <img src={aboutBg} className=" w-full " /> */}
        <div className=" my-[10px] lg:my-[30px] bg-white flex w-full p-[20px] h-[200px] items-center justify-center ">
          <h1 className=" ">
            မေခွန်း ၁ ခု ကို စက္ကန့် ၂၀ အတွင်း ဖြေဆို ရပါမည်။ အချိန်ကုန်လျှင်
            မေးခွန်း ကျော်ပြီး နောက်တစ်ပုဒ် ပေါ်လာမည် ဖြစ်သည်။
          </h1>
        </div>

        <div className=" flex w-full items-center justify-between">
          <div className=" h-full flex w-[30%] items-center justify-center">
            <Button3 title="Back" onFunction={() => onBack()} />
          </div>

          <div className=" h-full flex w-[30%] items-center justify-center">
            <Button3 title="Start" onFunction={() => onStart()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;
