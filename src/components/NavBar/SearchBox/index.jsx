import React from "react";
import AirplanSelected from "@/assets/Images/Icons/AirplaneSelected.svg";
import AirplanNotSelected from "@/assets/Images/Icons/AirplaneNotSelected.svg";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import searchIcon from "@/assets/Images/Icons/search-normal.svg";
import History from "../History";
import InputTextField from "@/components/Ui/InputTextField";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { Link } from "react-router-dom";

function SearchBox() {
    return (
        <>
            <div className="lg:z-20 lg:-m-28 md:sm:shadow-2xl sm:shadow-none rounded lg:w-fit m-auto" id="container">
                <div className="bg-white flex flex-col lg:items-start items-center rounded-lg p-6" id="container">
                    <div>
                        <ul className="flex justify-around gap-10 md:text-base sm:text-3xl ">
                            <li className="flex gap-2 text-blue-500 ">
                                <img src={AirplanSelected} className="md:block sm:hidden"/>
                                پرواز خارجی
                            </li>
                            <li className="flex gap-2">
                                <img src={AirplanNotSelected} className="md:block sm:hidden"/>
                                پرواز داخلی
                            </li>
                        </ul>
                    </div>
                    <hr className=""/>
                    <div className="line w-full"/>
                    <div className="flex py-6 gap-4 items-center justify-center">
                        <Button size="lg" variant="fill" className={"sm:py-4 px-8"} >
                            یک طرفه
                        </Button>
                        <Button  variant="outline" className={"sm:py-4 px-8"}>
                            رفت و برگشت
                        </Button>
                        <Button size="lg" variant="outline" className={"sm:py-4 px-8 "}>
                            چند مسیره
                        </Button>
                    </div>
                    <div className="flex flex-col gap-1 lg:flex lg:flex-row lg:gap-6 w-full lg:w-auto flex-wrap items-center sm:gap-8 ">
                        <InputTextField size="sm" className={"sm:px-44 lg:px-0 "}>مبدا</InputTextField>
                        <ConnectingAirportsIcon />
                        <InputTextField size="sm" className={"sm:px-44 lg:px-0"}>مقصد</InputTextField>
                        <InputTextField size="sm" className={"sm:px-44 lg:px-0"}>تاریخ رفت و برگشت</InputTextField>
                        <InputTextField size="sm" className={"sm:px-44 lg:px-0"}>تعداد مسافر</InputTextField>
                        <InputTextField size="sm" className={"sm:px-44 lg:px-0"}>کلاس پرواز</InputTextField>
                        <Link to={"ticket"}>
                        <Button variant="fill" size="xl" className={"sm:px-56 lg:px-3"}>
                            <img src={searchIcon}/>
                            جستجو
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <History/>
        </>
    );
}

export default SearchBox;
