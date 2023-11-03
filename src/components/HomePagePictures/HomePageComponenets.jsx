import React from "react";
import shiraz from "@/assets/Images/Icons/HomePageShiraz.jpg";
import dubai from "@/assets/Images/Icons/HomePageDubai.jpg";
import turkey from "@/assets/Images/Icons/HomePageTurkey.jpg";
import kish from "@/assets/Images/Icons/HomePageKish.jpg";
import "@/components/HomePagePictures/swiper.css"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





function HomePageComponenets() {
  return (
    <div className=" mt-14" id='container'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay ,Pagination ,Navigation ]}
      >
        
        <SwiperSlide>
          <div className="relative ">
            <div style={{ paddingBottom: "40%" }} />
            <img
              src={kish}
              alt="Photo of kish island"
              className="absolute top-0 left-0 h-auto rounded-lg object-cover"
              />
            <div className="absolute bottom-0 ">
              <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                بهترین فصل شنا
              </p>
              <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white ">
                خرید بلیط پرواز های کیش
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full ">
            <div style={{ paddingBottom: "40%" }} />
            <img
              src={turkey}
              alt="Photo of City turkiye"
              className="absolute top-0 left-0 w-full h-auto rounded-lg object-cover "
            />
            <div className="absolute bottom-0">
              <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                سفر به ترکیه
              </p>
              <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white">
                خرید بلیط پرواز‌های ترکیه
              </button>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className="relative w-full ">
            <div style={{ paddingBottom: "40%" }} />
            <img
              src={shiraz}
              alt="Photo of takht jamshid shiraz"
              className="absolute top-0 left-0 h-auto rounded-lg object-cover "
            />
            <div className="absolute bottom-0">
              <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                دنیایی از تاریخ و هنر
              </p>
              <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white">
                خرید بلیط پرواز‌های شیراز
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full ">
            <div style={{ paddingBottom: "40%" }} />
            <img
              src={dubai}
              alt="Photo of city dubai"
              className="absolute top-0 left-0 h-auto rounded-lg object-cover "
            />
            <div className="absolute bottom-0">
              <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                شگفتی در صحرا
              </p>
              <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white">
                خرید بلیط پرواز های دبی
              </button>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>



  );
}

export default HomePageComponenets;