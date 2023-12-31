import BackArrow from "../assets/images/back-arrow.png";
import buttonBg1 from "../assets/images/buttonbg.png";
import buttonBg from "../assets/images/optionbg.png";
import optionGreen from "../assets/images/option-green.png";
import optionRed from "../assets/images/option-red.png";
import optionHover from "../assets/images/option-hover.png";
import rightArrow from "../assets/images/right-arrow.png";
import remainingTime from "../assets/images/remaining.gif";
import btnBg from "../assets/images/btn-white-purple.png";

import komiRight from "../assets/images/komi-right.png";
import komiWrong from "../assets/images/komi-wrong.png";
import komiThink from "../assets/images/komi-think.png";
import timeupImg from "../assets/images/timeup.png";
import timeupImg2 from "../assets/images/timeup2.png";
import questionBoard from "../assets/images/question-board.png";
import { useEffect, useState } from "react";
import ButtonImage from "../components/ButtonImage";
import { useNavigate, useParams } from "react-router-dom";
import generalData from "../../utils/general.json";
import computerData from "../../utils/computer.json";
import iqtestData from "../../utils/iqtest.json";
import { useScore } from "../hooks/useScore";
import RemainingTime from "../components/RemainingTime";
import RemainingTime2 from "../components/RemainingTime2";
import { Progress } from "@material-tailwind/react";
import Countdown2 from "../components/CountDown2";
import Button3 from "../components/Button3";
import Button4 from "../components/Button4";
import { stringify } from "postcss";
import useCountdown from "../hooks/useCountdown";
import BtnOption from "../components/BtnOption";
import Image from "react-bootstrap/Image";

let noOfQuestion = 20;
function generateUniqueRandomArray(category) {
  const uniqueRandomArray = [];
  let j = 50;
  if (category == "general") {
    j = 116;
  } else if (category == "computer") {
    j = 91;
  } else {
    j = 42;
  }

  while (uniqueRandomArray.length < noOfQuestion) {
    const randomNumber = Math.floor(Math.random() * j);

    if (!uniqueRandomArray.includes(randomNumber)) {
      uniqueRandomArray.push(randomNumber);
    }
  }

  return uniqueRandomArray;
}

function Question() {
  const { score, setScore } = useScore();
  const { category } = useParams();

  const navigate = useNavigate();

  const [correct, setCorrect] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const [idArray, setIdArray] = useState(generateUniqueRandomArray(category));
  // console.log(idArray);
  const [data, setData] = useState();
  const [timeup, setTimeup] = useState(false);

  const [selectedAns, setselectedAns] = useState([]);
  const [rightAns, setRightAns] = useState([]);

  const [initialSeconds, setInitialSeconds] = useState(20);

  const [jsonData, setJsonData] = useState(
    category == "general"
      ? generalData
      : category == "computer"
      ? computerData
      : iqtestData
  );
  // const [seconds, setSeconds] = useState(5);
  // const [score, setScore] = useState(0);

  const handleCountdownComplete = () => {
    console.log("Countdown complete!");
    onNext("...");
  };

  // const { seconds, isRunning, startCountdown, pauseCountdown, resetCountdown } =
  //   useCountdown(60, handleCountdownComplete);

  // useEffect(() => {
  //   // Start the countdown when the component mounts
  //   startCountdown();

  //   // Optionally, you can return a cleanup function to stop the countdown when the component unmounts
  //   return () => {
  //     pauseCountdown();
  //     resetCountdown();
  //   };
  // }, []);

  const onBack = () => {
    const res = confirm("You will loose the progress. Are you sure ?");
    if (res) {
      window.location.href = "/";
    }
  };

  const onNext = (_selectedAns) => {
    // push both array
    console.log(_selectedAns);

    if (_selectedAns == jsonData[idArray[currentId]].rightAns) {
      setScore(score + 1);
    }

    if (_selectedAns !== "...") {
      setselectedAns(() => [...selectedAns, _selectedAns]);
    } else {
      setTimeup(true);
      setselectedAns(() => [...selectedAns, "..."]);
    }

    setRightAns((prev) => [...prev, jsonData[idArray[currentId]].rightAns]);

    if (currentId === noOfQuestion - 1) {
      // alert("Congratulation! You have completed the test");
      localStorage.setItem(
        "rightAns",
        JSON.stringify([...rightAns, jsonData[idArray[currentId]].rightAns])
      );
      localStorage.setItem(
        "selectedAns",
        JSON.stringify([...selectedAns, _selectedAns])
      );
      navigate("/score");
    }

    if (_selectedAns === "...") {
      // Use a setTimeout inside the onNext function
      setTimeout(() => {
        setCurrentId((prevId) => prevId + 1);
        console.log("time up and add id");
        setTimeup(false);
      }, 1000);
    } else {
      setCurrentId((prevId) => prevId + 1);
      console.log("select option and add i");
      setTimeup(false);
    }

    resetCountdown();
  };

  useEffect(() => {
    console.log("currentid change.");
  }, []);

  /* ----------------------------- handle back key ---------------------------- */
  useEffect(() => {
    window.history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function (event) {
      window.location.href = "/";
    });
  }, []);

  useEffect(() => {
    console.log(rightAns);
    console.log(selectedAns);
  }, [rightAns, selectedAns]);

  const { seconds, isRunning, startCountdown, pauseCountdown, resetCountdown } =
    useCountdown(initialSeconds, handleCountdownComplete);

  useEffect(() => {
    // Start the countdown when the component mounts
    startCountdown();

    // Optionally, you can return a cleanup function to stop the countdown when the component unmounts
    return () => {
      pauseCountdown();
      resetCountdown();
    };
  }, [currentId]);

  if (timeup) {
    return (
      <div className=" h-screen w-full flex flex-col items-center  justify-center ">
        <div className="  bg-white flex flex-col w-[250px] lg:w-[500px]">
          <div className=" h-[100%] lg:h-[50%] flex items-end">
            {/* <h1 className=" text-[6rem] font-bold text-[#7958AF]">
              Time Up !!!
          </h1> */}

            <img src={timeupImg2} className=" w-auto" />
          </div>
          <img src={timeupImg} className=" w-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col  items-center justify-center p-[1%]">
      {/*<<<<<<<<<< score and time top */}
      <div className=" flex flex-col  w-[95%] lg:w-1/2 ">
        <div className=" flex items-center justify-between  ">
          <div className=" flex h-[50px] w-[200px] items-center justify-center bg-white  ">
            {/* <img src={remainingTime} className=" h-[7rem]" /> */}
            {/* <RemainingTime onFinished={onNext} /> */}
            <div>
              <p className=" font-bold">Countdown: {seconds} s</p>
            </div>
          </div>
          <div className=" flex h-[50px] w-[100px] items-center justify-center  bg-white ">
            <div>
              <p className="font-bold ">Score : {score}</p>
            </div>
          </div>
        </div>
        <br />
        <div className=" flex h-[20px]">
          <Progress value={(seconds / initialSeconds) * 100} coloxr="indigo" />
        </div>
      </div>
      {/* score and time top >>>>>>>>*/}

      {/* <<<<<<<<<<<<<<<<<<<<<<< question and answer */}
      <div className=" flex flex-col  w-[95%] lg:w-1/2 items-center justify-center">
        {/* showing question and answer */}
        {/* For dispalying question */}
        <div className=" flex flex-col items-center justify-center   w-full">
          {/* <Image fluid src={questionBoard} /> */}
          <div className=" relative top-7 flex h-[60px] items-center justify-center  bg-[#7958AF] text-white w-[80px]">
            <h1 className=" ">{currentId + 1}</h1>
          </div>

          <div className=" flex h-[250px] bg-white w-full items-center justify-center px-[20px]">
            <h1 className="">Q : {jsonData[idArray[currentId]].question}</h1>
          </div>
        </div>

        <div className="  grid grid-cols-2 w-4/5 gap-[20px] lg:gap-[30px] mt-[30px] lg:mt-[50px]">
          {/* <h1 className=" text-[4rem] w-full text-start py-3">Ans : </h1> */}

          {jsonData[idArray[currentId]]?.options?.map((i, index) => (
            <>
              {/* BtnOption component */}
              <BtnOption
                onFunction={() => onNext(i)}
                title={i}
                name={
                  index == 0
                    ? "A."
                    : index == 1
                    ? "B."
                    : index == 2
                    ? "C."
                    : "D."
                }
              />
            </>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className=" flex w-[95%] lg:w-1/2  h-[50px] items-center ">
        <div
          onClick={() => onBack()}
          className=" cursor-pointer flex w-[150px] h-[50px] bg-white  items-center justify-center "
        >
          <h1>Leave</h1>
        </div>
      </div>
    </div>
  );
}

export default Question;
