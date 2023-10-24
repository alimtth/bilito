import React from "react";
import titlePic from "@/assets/Images/titlePic.png";
import "../style.css";
import SearchBox from "../SearchBox/index";

function HomePageScreen() {
  return (
    <>
      <section className="flex flex-col relative items-center">
        <img src={titlePic} />
        <span className="absolute top-11 text-2xl" id="container">
          <p className="text-white font-bold text-3xl pr-20">
            راحتی و سرعت در <br /><br /> رزرو بلیط هواپیما با بیلیتو
          </p>
        </span>
      </section>
    </>
  );
}

export default HomePageScreen;
