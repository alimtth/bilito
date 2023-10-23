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
          <b className="text-white">
            راحتی و سرعت در <br /> رزرو بلیط هواپیما با بیلیتو
          </b>
        <SearchBox/>
        </span>
      </section>
    </>
  );
}

export default HomePageScreen;
