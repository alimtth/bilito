import React from "react";
import titlePic from "@/assets/Images/titlePic.png";
import titlePic2 from "@/assets/Images/titelePic2.png";
import titlePic4 from "@/assets/Images/titelePic4.png";


import "../style.css";
import "./styleSwiper.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HomePageScreen() {
    return (
        <div className="w-full ">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay,]}
            >
                <SwiperSlide>
                    <div className="flex flex-col relative w-full">
                        <img src={titlePic} className="w-full" />
                        <p className="absolute text-white font-bold text-lg lg:text-3xl p-20">
                            راحتی و سرعت در<br /> رزرو بلیط هواپیما با بیلیتو
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col relative w-full">
                        <img src={titlePic2} className="w-full" />
                        <p className="absolute text-white font-bold text-lg lg:text-3xl p-20">
                        راحتی و سرعت در<br /> رزرو بلیط هواپیما با بیلیتو
                        </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="flex flex-col relative w-full">
                        <img src={titlePic4} className="w-full" />
                        <p className="absolute text-white font-bold text-lg lg:text-3xl p-20">
                        راحتی و سرعت در<br /> رزرو بلیط هواپیما با بیلیتو
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default HomePageScreen;
