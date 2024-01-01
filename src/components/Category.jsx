import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import modalBg from "../assets/images/modal.png";
import categoryTitle from "../assets/images/category-title.png";
import ButtonImage from "../components/ButtonImage";
import { Progress } from "@material-tailwind/react";
import Button4 from "./Button4";
import Button3 from "./Button3";
import { useScore } from "../hooks/useScore";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

function Category() {
  const { setCategory } = useScore();
  const [showCategory, setShowCategory] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (param) => {
    window.location.href = `./playing/${param}`;
  };
  useEffect(() => {
    localStorage.setItem("rightAns", JSON.stringify([]));
    localStorage.setItem("selectedAns", JSON.stringify([]));
  }, []);

  return (
    <div className="  flex items-center justify-center  h-screen flex-col ">
      <div className=" w-[95%] lg:w-1/2  flex items-center justify-center flex-col ">
        <div className="  w-[95%]  lg:w-[70%] flex items-center justify-center">
          {/* <h1 className="  text-[4rem] text-white font-bold ">Category</h1> */}
          <img src={categoryTitle} className="" />
        </div>
        <br />
        <br />
        <div className=" flex flex-col w-1/2 items-center justify-center gap-4  ">
          <Button4
            onFunction={() => {
              onSubmit("general");
            }}
            title="General"
          />
          {/* <Button4
            onFunction={() => {
              onSubmit("iqtest");
            }}
            title={"Education"}
          /> */}

          <Button4
            onFunction={() => {
              onSubmit("computer");
            }}
            title={"Hardware"}
          />

          <Button3
            onFunction={() => {
              navigate("/");
            }}
            title={"Back"}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
