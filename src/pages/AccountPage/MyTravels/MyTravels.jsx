import React, { useState } from 'react';
import Buttons from '@/components/Ui/Button'
import arrowdown from "@/assets/Images/Icons/arrow-down.svg"
import message from "@/assets/Images/Icons/message.png"
import messageblue from "@/assets/Images/Icons/messageblue.svg"
import close from "@/assets/Images/Icons/close-square.svg"
import airplane from "@/assets/Images/Icons/airplane-square.svg"
import omanAir from '@/assets/Images/Icons/airlinelogoweb.svg'
import iconetimer from '@/assets/Images/Icons/timer.svg'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import iconbag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
function MyTravels() {
    const [showDetails, setShowDetails] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    console.log(showDetails);
    return (
        <>
            <div className='flex flex-col w-full mt-11 '>
                <div className="flex justify-between items-center ">
                    <h3 className="font-bold">  سفرهای من</h3>
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col">
                        <Buttons variant='grayBTN' onClick={toggleDropdown}>
                            مرتب سازی
                            <img src={arrowdown} alt="" />
                        </Buttons>
                        {isDropdownOpen && (
                            <div className='fixed flex flex-col z-30 bg-white shadow-lg gap-2 py-2 rounded-lg px-9 mt-11'>
                                <ul>جدیدترین</ul>
                                <ul>قدیمی‌ترین</ul>
                                <ul>کنسلی‌ها</ul>
                                <ul>باتاخیر</ul>
                                <ul>تغییر مسیر</ul>
                            </div>
                        )}
                        </div>
                        <div className="flex">
                            <div className="flex justify-center items-center bg-red-400 text-sm bg-opacity-75 rounded-full w-5 h-5 text-red-20 relative z-20 right-4 bottom-1">+9</div>
                            <img src={message} alt="" className='w-8 z-10' />
                        </div>
                    </div>
                </div>
                <div className=' bg-blue-50 flex justify-between px-10 py-2 rounded-lg mt-6 z-10'>
                    <h3 className="flex items-center gap-4 text-blue-650 font-bold"><img src={messageblue} alt="" />پرواز شماره 165 از استانبول به دبی در تاریخ  6شهریور 1402 در ساعت 21:50، به مدت 2 ساعت تاخیر دارد.</h3>
                    <img src={close} alt="" className='w-6' />
                </div>
                <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                    <div className='flex justify-between'>
                        <h3 className="flex gap-4"><img src={airplane} alt="" />پرواز استانبول به دبی</h3>
                        <div
                            className='bg-green-100 text-green-700  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>تمام شده
                        </div>
                    </div>
                    <div className="flex items-center mt-7">
                        <div className="flex gap-7 items-center">
                            <ul className='text-gray-600 flex'>شماره رزرو:<p className='text-black'>123456</p></ul>
                            <ul className='text-gray-600 flex'>تاریخ رزرو:<p className='text-black'>1402/02/18</p></ul>
                            <ul className='text-gray-600 flex'>تاریخ پرواز:<p className='text-black'>1402/06/25</p></ul>
                            <ul className='text-gray-600 flex'>مبلغ کل سفارش:<p className='text-black'>11٬470٬154تومان</p></ul>
                        </div>
                        {showDetails ? (
                            <div></div>
                        ) : (
                            <div onClick={toggleDetails}>
                                <Buttons className={"border-none"}>
                                    جزئیات سفر
                                    <img src={arrowdown} alt="" />
                                </Buttons>
                            </div>

                        )}
                    </div>
                    {showDetails ? (
                        <div className='flex flex-col'>
                            <div className="flex mt-9">
                                <div className='pb-5 gap-6 w-[575px] flex items-center '>
                                    <img src={omanAir} />
                                    <div>
                                        <div className='pl-8 gap-2 flex flex-col items-center'>
                                            <p>02:50</p>
                                            <p className='text-gray-600'>(SAW)</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className='gap-6 flex flex-col'>
                                            <div className='gap-[2px] flex items-center justify-center'>
                                                <img src={iconetimer} />
                                                <p className='text-gray-500 '>19:00</p>
                                            </div>
                                            <div className='relative flex items-center justify-center '>
                                                <img className='z-20' src={iconeairplan} />
                                                <span className='absolute w-[142px] h-[1px] fill-none z-10'>
                                                    <img src={line} />
                                                </span>
                                            </div>
                                            <div className='gap-[2px] flex items-center justify-center'>
                                                <img src={iconbag} />
                                                <p className='text-gray-500'>20Kg</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='pr-8 gap-2 flex flex-col items-center'>
                                        <p>21:50</p>
                                        <p className='text-gray-600'>(DXB)</p>
                                    </div>
                                </div>
                                <div className='flex gap-10'>
                                    <ul className='flex flex-col'>شماره پرواز <p>165</p></ul>
                                    <ul className='flex flex-col'>کلاس پرواز <p>کوانومی</p></ul>
                                    <ul className='flex flex-col'>وضعیت<p className='text-green-500'>تایید شده</p></ul>
                                </div>

                            </div>
                            <div className='flex flex-col gap-8 mt-8 '>
                                <div className="flex text-gray-600 gap-11">
                                    <p>نام مسافر</p>
                                    <p>نام مسافر به لاتین</p>
                                    <p>تاریخ تولد</p>
                                    <p>کدملی/شماره گذرنامه</p>
                                </div>
                                <div className="flex text-black gap-11">
                                    <p> سید علی مطهری</p>
                                    <p>ali motahari</p>
                                    <p>1375/04/25</p>
                                    <p>123456789987</p>
                                </div>
                            </div>
                                <div onClick={toggleDetails} className='flex justify-end'>
                                    <Buttons className={"border-none"}>
                                        بستن
                                        <img src={arrowdown} alt="" />
                                    </Buttons>
                                </div>

                        </div>
                    ) : (
                        <div>

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default MyTravels;