import React from "react";
import AirplanSelected from "@/assets/Images/Icons/AirplaneSelected.svg";
import AirplanNotSelected from "@/assets/Images/Icons/AirplaneNotSelected.svg";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import searchIcon from "@/assets/Images/Icons/search-normal.svg";
import History from "../History";
import InputTextField from "@/components/Ui/InputTextField";

function SearchBox() {
    return (
        <>
            <div className="lg:z-10 lg:-m-28 shadow-2xl rounded lg:w-fit m-auto" id="container">
                <div className="bg-white flex flex-col lg:items-start items-center rounded-lg p-6" id="container">
                    <div>
                        <ul className="flex justify-around gap-10 text-base ">
                            <li className="flex gap-2 text-blue-500">
                                <img src={AirplanSelected}/>
                                پرواز خارجی
                            </li>
                            <li className="flex gap-2">
                                <img src={AirplanNotSelected}/>
                                پرواز داخلی
                            </li>
                        </ul>
                    </div>
                    <div className="line w-full"/>
                    <div className="flex py-6 gap-4 items-center justify-center">
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
                    <div className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-8 w-full lg:w-auto flex-wrap items-center">
                        <InputTextField size="sm">مبدا</InputTextField>
                        <InputTextField size="sm">مقصد</InputTextField>
                        <InputTextField size="sm">تاریخ رفت و برگشت</InputTextField>
                        <InputTextField size="sm">تعداد مسافر</InputTextField>
                        <InputTextField size="sm">کلاس پرواز</InputTextField>
                        <Button variant="fill" size="xl">
                            <img src={searchIcon}/>
                            جستجو
                        </Button>
                    </div>
                </div>
            </div>
            <History/>
        </>
    );
}

export default SearchBox;
