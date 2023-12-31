import React, { useContext, useEffect, useState } from "react";

import starOutline from "../assets/images/star-outline.png";
import starFill from "../assets/images/star-fill.png";
import scoreImg from "../assets/images/score.png";
import buttonBg from "../assets/images/buttonbg.png";
import grayBg from "../assets/images/gray-bg.png";
import scoreBg from "../assets/images/score-bg.png";
import score2 from "../assets/images/score2.png";
// import scorBg from "../assets/images/"
// import scorBg from "../assets/images/"
import komi0Star from "../assets/images/komi-lose.png";
import komi1Star from "../assets/images/komi-1star.png";
import komi2Star from "../assets/images/komi-happy.png";
import komi3Star from "../assets/images/komi-win.png";
import PurpleImage from "../assets/images/button-purple.png";
import PurpleImage2 from "../assets/images/button-purple2.png";
import stars0 from "../assets/images/0stars.png";
import stars1 from "../assets/images/1stars.png";
import stars2 from "../assets/images/2stars.png";
import stars3 from "../assets/images/3stars.png";
import bgWhite from "../assets/images/bg-white.png";
import congrats from "../assets/images/congrats.png";
import history from "../assets/images/history.png";
import rightImg from "../assets/images/right.png";
import wrongImg from "../assets/images/wrong.png";

import { Player } from "@lottiefiles/react-lottie-player";

import Button3 from "../components/Button3";

import { useNavigate } from "react-router-dom";
import { useScore } from "../hooks/useScore";

const keys = ["Play Again", "Leave"];

function Score() {
  const { score, setScore, category } = useScore();

  const [rightAns, setrightAns] = useState(
    JSON.parse(localStorage.getItem("rightAns"))
  );
  const [selectedAns, setSelectedAns] = useState(
    JSON.parse(localStorage.getItem("selectedAns"))
  );

  useEffect(() => {
    if (rightAns.length == 0) {
      console.log(rightAns);
      window.location.href = "/";
    }
  }, [rightAns]);

  useEffect(() => {
    console.log(selectedAns);
    console.log(rightAns);
  }, [rightAns, selectedAns]);

  console.log(score);
  const navigate = useNavigate();
  // const [scoreDisplay, setScoreDisplay] = useState(0);

  const onLeave = () => {
    navigate("/");
  };

  const onPlayAgain = () => {
    // setScore(0);
    // navigate(`/playing/${category}`);
    navigate("/");
  };

  useEffect(() => {}, []);

  useEffect(() => {
    window.history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function (event) {
      // window.location.href = "/";
    });
  }, []);

  if (rightAns.length == 0) {
    return <></>;
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" flex flex-col w-full lg:w-1/2   items-center justify-center ">
        <br />
        <div className=" absolute flex items-center justify-center  z-40 top-0 ">
          <Player
            src="https://lottie.host/e8786a9b-b42a-458c-b3e5-2747d797dac8/mSjhQzgUDv.json"
            className="  "
            loop
            autoplay
          />
        </div>

        {/* <h1 className=" text-[2rem] font-bold text-white bg-[#7958AF] px-6">
        Congratulation!
      </h1> */}
        <img src={congrats} className=" w-10/12 lg:w-2/3 " />

        <div className=" w-3/6  ">
          {((score / 20) * 100).toFixed(2) > 2 ? (
            <img src={stars1} className=" h-full " />
          ) : ((score / 20) * 100).toFixed(2) > 4 ? (
            <img src={stars2} className=" h-full " />
          ) : ((score / 20) * 100).toFixed(2) > 9 ? (
            <img src={stars3} className=" h-full " />
          ) : (
            <img src={stars0} className=" h-full " />
          )}
        </div>
        <h1 className=" my-[10px] text-[#7958AF] text-[1rem] lg:text-[1.5rem] ">
          Your Score
        </h1>

        <div className=" ">
          {/* this is score bg */}
          {/* <img src={scoreBg} className=" w-[30rem] lg:w-[67rem]" /> */}
        </div>

        <div className=" w-4/5 h-[56px] lg:h-[110px] relative flex flex-col items-center justify-start ">
          <img src={score2} className="absolute w-full  lg:w-[80%]" />
          <h1 className=" z-10 text-white text-[20px] lg:text-[40px] flex items-center justify-center h-[35px] lg:h-[90px] ">
            {score} out of 20
          </h1>
        </div>
        <h1 className=" my-[10px] text-[#7958AF] text-[40px] lg:text-[60px]">
          {((score / 20) * 100).toFixed(2)}%
        </h1>

        <br />
        {/* button bar */}
        <div className=" flex items-center justify-between w-[90%] lg:w-[70%] ">
          {keys.map((key, index) => (
            // <div
            //   key={index}
            //   onClick={() => (key == "Leave" ? onLeave() : onPlayAgain())}
            //   className="flex relative text-[4rem]  cursor-pointer  w-[66rem] h-auto text-white   justify-center items-center "
            //   style={
            //     {
            //       // backgroundImage: `url(${PurpleImage})`,
            //       // backgroundRepeat: "no-repeat",
            //       // backgroundSize: "contain",
            //       // transition: "background-image 0.1s ease-in-out",
            //       // borderRadius: "10px",
            //       // border: "3px solid black",
            //       // textShadow: "2px 2px 0px black",
            //     }
            //   }
            //   onMouseOver={(e) => {
            //     // e.currentTarget.style.backgroundImage = `url(${PurpleImage2})`;
            //     // e.currentTarget.style.border = "3px solid black";
            //     // e.currentTarget.style.textShadow = "0px 0px 0px black";
            //   }}
            //   onMouseOut={(e) => {
            //     // e.currentTarget.style.backgroundImage = `url(${PurpleImage})`;
            //     // e.currentTarget.style.border = "3px solid black";
            //     // e.currentTarget.style.textShadow = "2px 2px 0px black";
            //   }}
            // >
            //   <img className=" absolute" src={PurpleImage} />
            //   <h1 className=" z-[1] text-[3rem] font-bold">{key}</h1>
            // </div>
            <div key={index} className=" w-[100px] lg:w-[200px] ">
              <Button3
                title={key}
                onFunction={() => (key == "Leave" ? onLeave() : onPlayAgain())}
              />
            </div>
          ))}
        </div>
        <br />
        <img src={history} className=" w-[70%] lg:w-3/6  " />
        <br />

        {/* <img src={bgWhite} className=" " /> */}
        <div className=" flex items-center justify-center w-full mb-[20px]  ">
          <table className=" flex w-full items-center  justify-center ">
            <tbody className=" bg-white">
              {selectedAns.map((i, index) => (
                <tr key={index} className=" w-full flex my-[10px] ">
                  <th className=" w-[150px] lg:w-[300px] flex items-center justify-center">
                    <h1 className=" ">Question No.{index + 1}</h1>
                  </th>

                  <th className=" w-[150px] lg:w-[300px] flex items-center justify-center">
                    {selectedAns[index] == rightAns[index] ? (
                      <img src={rightImg} className="h-[30px]" />
                    ) : (
                      <img className="h-[30px]" src={wrongImg} />
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Score;
