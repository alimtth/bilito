import React from "react";
import AirplanSelected from "@/assets/Images/Icons/AirplaneSelected.svg";
import AirplanNotSelected from "@/assets/Images/Icons/AirplaneNotSelected.svg";
import Button from "@/components/Ui/Button";
import searchIcon from "@/assets/Images/Icons/search-normal.svg";
import History from "../History";
import InputTextField from "@/components/Ui/InputTextField";

function SearchBox() {
  return (
    <>
      <div className="md:z-10 md:translate-y-[-50%] shadow-2xl rounded md:w-fit m-auto">
        <span
          className="bg-white flex flex-col items-start rounded-lg p-6"
          id="container"
        >
          <div>
            <ul className="flex justify-around gap-10 text-base ">
              <li className="flex gap-2 text-blue-500">
                <img src={AirplanSelected} />
                پرواز خارجی
              </li>
              <li className="flex gap-2">
                <img src={AirplanNotSelected} />
                پرواز داخلی
              </li>
            </ul>
          </div>
          <hr className="w-full h-[3px] rounded-sm" />
          <div className="flex py-6 gap-4">
            <Button size="lg" variant="outline">
              رفت
            </Button>
            <Button size="lg" variant="fill">
              رفت و برگشت
            </Button>
            <Button size="lg" variant="outline">
              چند مسیره
            </Button>
          </div>
          <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-8 w-full md:w-auto">
            <InputTextField size="lg">مبدا</InputTextField>
            <InputTextField size="lg">مقصد</InputTextField>
            <InputTextField size="lg">تاریخ رفت و برگشت</InputTextField>
            <InputTextField size="lg">تعداد مسافر</InputTextField>
            <InputTextField size="lg">کلاس پرواز</InputTextField>
            <Button variant="fill" size="xl">
              <img src={searchIcon} />
              جستجو
            </Button>
          </div>
        </span>
      </div>
      <History />
    </>
  );
}

export default SearchBox;
