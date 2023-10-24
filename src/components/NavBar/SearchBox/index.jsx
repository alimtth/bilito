import React from "react";
import AirplanSelected from "@/assets/Images/Icons/AirplaneSelected.svg";
import AirplanNotSelected from "@/assets/Images/Icons/AirplaneNotSelected.svg";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import serachIcon from "@/assets/Images/Icons/search-normal.svg";
import History from "../History";

function SearcBox() {
  return (
    <>
    <section className="absolute top-72 shadow-2xl rounded">
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
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-3 items-center">
            <Input size="lg" placeholder={"مبدا"} />
            <p className="py-2 text-xl">⇆</p>
            <Input size="lg" placeholder={"مقصد"} />
          </div>
          <Input size="lg" placeholder={"تاریخ رفت و برگشت"} />
          <Input size="lg" placeholder={"تعداد مسافر"} />
          <Input size="lg" placeholder={"کلاس پرواز"} />
          <Button variant="fill" size="xl">
            <img src={serachIcon} />
            جستجو
          </Button>
        </div>
      </span>
    </section>
    <br /><br />
    <br /><br />
    <br /><br />
      <History/>
    </>
  );
}

export default SearcBox;
