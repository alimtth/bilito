import React from "react";
import titlePic from "@/assets/Images/titlePic.png";
import "../style.css";

function HomePageScreen() {
    return (
        <>
            <div className="flex flex-col relative w-full">
                <img src={titlePic} className="w-full"/>
                <p className="absolute text-white font-bold text-lg lg:text-3xl p-20">
                    راحتی و سرعت در رزرو بلیط هواپیما با بیلیتو
                </p>
            </div>
        </>
    );
}

export default HomePageScreen;
