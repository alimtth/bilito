import React, { useState } from 'react';
mport Button from "@/components/Ui/Button.jsx";
import omanAir from '@/assets/Images/Icons/airlinelogoweb.svg'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import line from '@/assets/Images/Icons/Line.svg'
import { Link } from 'react-router-dom';
import close from "@/assets/Images/Icons/close-square.svg";
import Buttons from "@/components/Ui/Button"

function Rule() {
    const [isShow, setIsShow] = useState(false);

    const handlclose = () => {
        setIsShow(false)
    }
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-70">
                        <div className=" bg-white  w-[900px] rounded-lg  shadow-lg z-50 py-5 px-5">
                            <div className="flex justify-end">
                                <img src={close} alt="" onClick={handlclose} />
                            </div>
                            <div className="flex gap-6">
                                <ul>اطلاعات پرواز</ul>
                                <ul>قوانین استرداد</ul>
                                <ul>قوانین ویزا و مسیر</ul>
                                <ul>بار مجاز</ul>
                            </div>
                            <hr className='w-full bg-gray-400 h-0.5 mt-3 mb-5' />
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h3 className='flex justify-center '><img src={omanAir} alt="" className='w-7' />gulf air</h3>
                                    <p>مجموعا 19:00 ساعت</p>
                                    <div className='flex flex-col gap-3'>
                                        <div
                                            className='bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>
                                            صندلی باقی مانده
                                        </div>
                                        <div
                                            className='bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>غیر
                                            قابل استرداد
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className='flex gap-3'>
                                        <h3>02:50</h3>
                                        <p>استانبول، فرودگاه استانبول</p>
                                        <p>دوشنبه 6 شهریور (شماره پرواز: 615)</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div
                                            className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>اکونومی
                                        </div>
                                        <div
                                            className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>سیستمی
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className=' flex items-center justify-center rotate-90 mt-20'>
                                        <img className='z-10' src={iconeairplan} />
                                        <span className='absolute w-[142px] h-[1px] '>
                                            <img src={line} />
                                        </span>
                                    </div>
                                    <div className='bg-zard-100 w-[280px] py-2 px-2 rounded-lg'>
                                        <h3 className="">15:35 توقف در امان،فرودگاه Queen Alia</h3>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-16">
                                    <div className='flex gap-3'>
                                        <h3>17:00</h3>
                                        <p>امان، فرودگاه Queen Alia</p>
                                        <p>دوشنبه 6 شهریور (شماره پرواز: 625)</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <h3>قیمت برای هر بزرگسال</h3>
                                        <p>11,470,154</p>
                                        <p>تومان</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className=' flex items-center justify-center rotate-90 mt-20'>
                                        <img className='z-10' src={iconeairplan} />
                                        <span className='absolute w-[142px] h-[1px] '>
                                            <img src={line} />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex gap-3 mt-16'>
                                    <h3>13:00</h3>
                                    <p>دبی فرودگاه Queen Alia</p>
                                    <p>دوشنبه 6 شهریور </p>
                                </div>
                                <div className="flex justify-end items-center gap-3 mt-5">
                                    <div className="flex text-blue-500 gap-2">
                                        <h2>مجموع پرداختی شما</h2>
                                        <p>34,410,462</p>
                                        <p>تومان</p>
                                    </div>
                                    <Link to={"rule"}>
                                    <Buttons variant='fill' className={"w-[300px] justify-center"}>
                                            ادامه
                                    </Buttons>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default Rule;