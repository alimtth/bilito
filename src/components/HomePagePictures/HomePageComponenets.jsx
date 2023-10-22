import React from "react";
import shiraz from "../../assets/Images/Icons/HomePageShiraz.jpg";
import dubai from "../../assets/Images/Icons/HomePageDubai.jpg";
import turkey from "../../assets/Images/Icons/HomePageTurkey.jpg";
import kish from "../../assets/Images/Icons/HomePageKish.jpg";
function HomePageComponenets() {
  return (
    <div className="flex justify-center gap-6">
      <div className="relative flex justify-start items-end  ">
        <img src={kish} className="rounded-md " />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-slate-800 opacity-60 rounded-md"></div>
        <p className="absolute pb-16 pr-4 mr-2 mb-2 text-white text-xl font-bold ">
          بهترین فصل شنا
        </p>
        <button className="h-auto w-auto mr-6 mb-6 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm">
          خرید بلیط پرواز های کیش
        </button>
      </div>
      <div className="relative flex justify-start items-end">
        <img src={turkey} className="rounded-md" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-slate-800 opacity-60 rounded-md"></div>
        <p className="absolute pb-16 pr-4 mr-2 mb-2 text-white text-xl font-bold ">
          سفر به ترکیه
        </p>
        <button className="h-auto w-auto mr-6 mb-6 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm">
          خرید بلیط پرواز های ترکیه
        </button>
      </div>
      <div className="flex flex-col gap-6 ">
        <div className="relative flex justify-start items-end">
          <img src={dubai} className="rounded-md" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-slate-800 opacity-60 rounded-md"></div>
          <p className="absolute pb-16 pr-4 mr-2 mb-2 text-white text-xl font-bold ">
            شگفتی در صحرا
          </p>
          <button className="h-auto w-auto mr-6 mb-6 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm">
            خرید بلیط پرواز های دبی
          </button>
        </div>
        <div className="relative flex justify-start items-end">
          <img src={shiraz} className="rounded-md" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-slate-800 opacity-60 rounded-md"></div>
          <p className="absolute pb-16 pr-4 mr-2 mb-2 text-white text-xl font-bold ">
            دنیایی از تاریخ و هنر
          </p>
          <button className="h-auto w-auto mr-6 mb-6 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm">
            خرید بلیط پرواز های شیراز
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageComponenets;
