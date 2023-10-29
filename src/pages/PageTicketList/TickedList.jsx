import React from "react";
import titlePic from "@/assets/Images/titlePic.png";
import {IoIosArrowDown} from "react-icons/io";
import airplane from "@/assets/Images/Icons/airplaneBorder.svg";
import calendar from "@/assets/Images/Icons/calendar.svg";
import profileAdd from "@/assets/Images/Icons/profile-add.svg";
import EditPen from "@/assets/Images/Icons/edit.svg";
import Button from "@/components/Ui/Button";
import {ArrowUpward} from "@mui/icons-material";
import {Slider} from "@mui/material";
import airport from "@/assets/Images/Icons/Airport.png";
import TicketList from "@/components/TicketList/index.jsx";


function TickedList() {
    return (
        <div className=" flex flex-col items-center">
            <section className="flex flex-col relative items-center">
                <img src={titlePic}/>
            </section>
            <section className="-m-2 md:-m-12 z-10 bg-white flex flex-col items-center rounded-lg shadow-2xl" id='container'>
                <div className="p-6 gap-8 flex justify-center items-center font-bold">
                    <div className="gap-2 flex items-center md:text-xl md:font-bold text-sm font-light">
                        <img src={airplane}/>
                        <p>بلیط همواپیما استانبول به دبی</p>
                    </div>
                    <div className="gap-2 flex items-center md:text-xl md:font-bold text-sm font-light">
                        <img src={calendar}/>
                        <p>دوشنبه 6 شهریور</p>
                    </div>

                    <div className="gap-2 flex items-center md:text-xl md:font-bold text-sm font-light">
                        <img src={profileAdd}/>
                        <p>3 مسافر</p>
                    </div>

                    <div className="gap-2 flex items-center md:text-xl md:font-bold text-sm font-light">
                        <img src={calendar}/>
                        <p>اکونومی</p>
                    </div>
                    <Button variant="fill">
                        <img src={EditPen}/>
                    </Button>
                </div>
            </section>

            <div className="flex mt-20 gap-6 justify-center" id='container'>
                <div className="md:block md:bg-gray-400 md:rounded-md md:basis-[25%] md:p-6 hidden">
                    <div className="flex justify-between">
                        <h3>تعداد نتایج: 121</h3>
                        <h3 className="text-blue-500 text-[13px]"> پاک کردن فیلتر‌ها</h3>
                    </div>
                    <hr className="mt-[16px] bg-gray-500 w-full h-[2px]"/>
                    <div className="flex justify-between mt-[16px]">
                        <h4>قیمت</h4>
                        <IoIosArrowDown/>
                    </div>
                    <div className="flex justify-between mt-[10px]">
                        <h4>تا 60.000.000</h4>
                        <h4>از 60.000.000</h4>
                    </div>
                    <div className="flex-col mt-[10px]">
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <hr className="mt-[14px] bg-gray-500 w-full h-[2px]"/>
                    <div className="flex justify-between mt-[16px]">
                        <h4>زمان حرکت</h4>
                        <IoIosArrowDown/>
                    </div>
                    <div className="flex justify-between mt-[10px]">
                        <h4>24:00</h4>
                        <h4>00:00</h4>
                    </div>
                    <div className="flex-col mt-[10px]">
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <hr className="mt-[14px] bg-gray-500 w-full h-[2px]"/>
                    <div className="flex justify-between mt-[16px]">
                        <h4>شرکت هواپیمایی </h4>
                        <IoIosArrowDown/>
                    </div>
                    <div className="flex flex-col gap-4 items-start mt-[17px]">
                        <div className="flex">
                            <input type="checkbox" className="border-none outline-none"/>
                            <img
                                src={airport}
                                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                            />
                            <h3 className="mr-[10px]">Pegasus</h3>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="border-none outline-none"/>
                            <img
                                src={airport}
                                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                            />
                            <h3 className="mr-[10px]">gulf</h3>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="border-none outline-none"/>
                            <img
                                src={airport}
                                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                            />
                            <h3 className="mr-[10px]">emirates</h3>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="border-none outline-none"/>
                            <img
                                src={airport}
                                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                            />
                            <h3 className="mr-[10px]">oman</h3>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="border-none outline-none"/>
                            <img
                                src={airport}
                                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                            />
                            <h3 className="mr-[10px]">Qatar Airways</h3>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="border-none outline-none"/>
                            <img
                                src={airport}
                                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                            />
                            <h3 className="mr-[10px]">Fly dubai</h3>
                        </div>
                        <hr className="mt-[16px] bg-gray-500 w-full h-[2px]"/>

                        {/* //////////////////////////////////////////////////////////////////// */}
                        <div className="flex justify-between">
                            <h4>تعداد توقف</h4>
                            <IoIosArrowDown/>
                        </div>
                        <div className="flex flex-col gap-4 items-start mt-[17px]">
                            <div className="flex">
                                <input type="radio" className="border-none outline-none"/>
                                <img
                                    src={airport}
                                    className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                                />
                                <h3 className="mr-[10px]">همه</h3>
                            </div>
                            <div className="flex">
                                <input type="radio" className="border-none outline-none"/>
                                <img
                                    src={airport}
                                    className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                                />
                                <h3 className="mr-[10px]">مستقیم</h3>
                            </div>
                            <div className="flex">
                                <input type="radio" className="border-none outline-none"/>
                                <img
                                    src={airport}
                                    className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                                />
                                <h3 className="mr-[10px]">یک</h3>
                            </div>
                            <div className="flex">
                                <input type="radio" className="border-none outline-none"/>
                                <img
                                    src={airport}
                                    className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                                />
                                <h3 className="mr-[10px]">دو یا بیشتر</h3>
                            </div>
                        </div>
                        <hr className="mt-[16px] bg-gray-500 w-full h-[2px]"/>
                    </div>
                </div>
                <div className="md:flex-auto md:basis-[75%]">
                    <div className="flex gap-4 justify-between">
                        <div
                            className="flex justify-between items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 basis-3/4 py-2 px-4 ">
                            <span>تقویم قیمتی</span>
                            <span><IoIosArrowDown/></span>
                        </div>
                        <div
                            className="flex justify-between items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 basis-1/4 py-2 px-4 ">
                            <span>مرتب سازی</span>
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <TicketList/>
                    <TicketList/>
                    <TicketList/>
                    <TicketList/>
                </div>
            </div>
        </div>
    );
}

export default TickedList;