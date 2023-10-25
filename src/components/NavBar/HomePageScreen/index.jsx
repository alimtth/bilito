import React from "react";
import titlePic from "@/assets/Images/titlePic.png";
import "../style.css";

function HomePageScreen() {
  return (
    <>
      <div className="flex flex-col relative items-center w-full">
        <img src={titlePic} className="w-full"/>
        <span className="absolute top-11 text-2xl" id="container">
          <p className="text-white font-bold text-3xl pr-20">
            راحتی و سرعت در <br /><br /> رزرو بلیط هواپیما با بیلیتو
          </p>
        </span>
      </div>
    </>
  );
}

export default HomePageScreen;
