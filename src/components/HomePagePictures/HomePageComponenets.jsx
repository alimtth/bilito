import React from "react";
import shiraz from "@/assets/Images/Icons/HomePageShiraz.jpg";
import dubai from "@/assets/Images/Icons/HomePageDubai.jpg";
import turkey from "@/assets/Images/Icons/HomePageTurkey.jpg";
import kish from "@/assets/Images/Icons/HomePageKish.jpg";

function HomePageComponenets() {
  return (
    <div className="grid grid-cols-3 w-full gap-4 ">
      <div className="relative w-full ">
        <div style={{ paddingBottom: "100%" }} />
        <img
          src={kish}
          className="absolute top-0 left-0 h-full object-cover"
        />
        <div className="absolute bottom-0 ">
          <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
            بهترین فصل شنا
          </p>
          <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
            خرید بلیط پرواز های کیش
          </button>
        </div>
      </div>

      <div className="relative w-full ">
        <div style={{ paddingBottom: "100%" }} />
        <img
          src={turkey}
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <div className="absolute bottom-0">
          <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
          سفر به ترکیه
          </p>
          <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
          خرید بلیط پرواز‌های ترکیه
          </button>
        </div>
      </div>



      <div className="grid gap-4">

        <div className="relative w-full ">
          <div style={{ paddingBottom: "50%" }} />
          <img
            src={shiraz}
            className="absolute top-0 left-0 w-full h-full object-cover "
          />
          <div className="absolute bottom-0">
            <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
            دنیایی از تاریخ و هنر
            </p>
            <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
            خرید بلیط پرواز‌های شیراز
            </button>
          </div>

        </div>
        <div className="relative w-full ">
          <div style={{ paddingBottom: "50%" }} />
          <img
            src={dubai}
            className="absolute top-0 left-0 w-full h-full object-cover "
          />
          <div className="absolute bottom-0">
            <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
              بهترین فصل شنا
            </p>
            <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
              خرید بلیط پرواز های کیش
            </button>
          </div>

        </div>
      </div>

    </div>


  );
}

export default HomePageComponenets;