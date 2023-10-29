import React from "react";
import titlePic from "@/assets/Images/titlePic.png";
import "../style.css";

function HomePageScreen() {
  return (
    <>
      <div className="flex flex-col relative w-full">
        <img src={titlePic} className="w-full"/>
          <p className="absolute text-white font-bold text-lg md:text-3xl pr-20">
            راحتی و سرعت در <br /><br /> رزرو بلیط هواپیما با بیلیتو
          </p>
      </div>
    </>
  );
}

export default HomePageScreen;
