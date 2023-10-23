import React from "react";
import AirplanSelected from "@/assets/Images/Icons/AirplaneSelected.svg";
import AirplanNotSelected from "@/assets/Images/Icons/AirplaneNotSelected.svg";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import serachIcon from "@/assets/Images/Icons/search-normal.svg";

function SearcBox() {
  return (
    <section className="absolute top-44">
      <span
        className="bg-white flex flex-col items-start rounded-lg p-6"
        id="container"
      >
        <div>
          <ul className="flex justify-around gap-10 text-base">
            <li className="flex gap-2">
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
        <div className="flex flex-row gap-2">
          <Input size="lg" placeholder={"مبدا"} />
          <p className="py-2">⇆</p>
          <Input size="lg" placeholder={"مقصد"} />
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
  );
}

export default SearcBox;
