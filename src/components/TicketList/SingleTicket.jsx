import React, { useState } from 'react';
import Button from "@/components/Ui/Button.jsx";
import omanAir from '@/assets/Images/Icons/airlinelogoweb.svg'
import iconetimer from '@/assets/Images/Icons/timer.svg'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import iconbag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
import propTypes from "prop-types";

import { Link, Outlet } from 'react-router-dom';
import close from "@/assets/Images/Icons/close-square.svg";
import Buttons from "@/components/Ui/Button"
function SingleTicket({forth, back, imagess, price, children}) {
    const [isloding, setIsloding] = useState(true);
    const [isShow, setIsShow] = useState(false);

    const handlShow = () => {
        setIsShow(true)
    }
    const handlclose = () => {
        setIsShow(false)
    }

    setTimeout(() => {
        setIsloding(false)
    }, 2000);

    return (
        <>
            <div className='flex border-gray-10 border rounded-lg flex-col gap-4 mt-6 justify-evenly  '>
                {isloding ? (
                    <div className="flex w-[100%] h-[150px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800 py-0">
                        <div className="w-1/4 bg-gray-300 dark:bg-gray-600"></div>
                        <div className=" p-4 md:p-4">
                            <h1 className="w-40 h-2 bg-gray-300 rounded-lg dark:bg-gray-700"></h1>

                            <p className="w-48 h-2 mt-4 bg-gray-450 rounded-lg dark:bg-gray-700"></p>

                            <div className="flex mt-4 item-center gap-x-2">
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                            </div>

                            <div className="flex justify-between mt-6 item-center">
                                <h1 className="w-10 h-2  bg-gray-450 rounded-lg dark:bg-gray-500"></h1>

                                <div className="h-4 bg-gray-450 rounded-lg w-28 dark:bg-gray-700"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // forth.map((item , forth, back) => (
                    <div>
                        <div className='flex justify-between items-center px-4 lg:flex-row flex-col gap-4 py-6'>
                            <div className='flex justify-center items-center gap-2' >
                                <div
                                    className='bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>
                                    صندلی باقی مانده
                                </div>
                                <div
                                    className='bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>غیر
                                    قابل استرداد
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-[8px]'>
                                <div
                                    className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>اکونومی
                                </div>
                                <div
                                    className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>سیستمی
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-[64px] px-4 lg:flex-row flex-col'>
                            <div className='pb-5 gap-6 w-[575px] flex items-center '>
                                <img src={imagess} />
                                <div>
                                    <div className='pl-8 gap-2 flex flex-col items-center'>
                                        <p>02:50</p>
                                        <p className='text-gray-600'>{forth}(SAW)</p>
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
                                    <p className='text-gray-600'>{back}(DXB)</p>
                                </div>
                            </div>
                            <div className='flex lg:justify-center lg:items-end gap-6 items-center self-center'>
                                <div className='text-blue-500'>{price} تومان</div>
                                <div>
                                    <Button size='lg' onClick={handlShow}>جزئیات بلیط</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                )}
                {isShow && (
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
                            <main>
                                <Outlet />
                            </main>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
}

SingleTicket.propTypes = {
    children: propTypes.node,
    forth: propTypes.string,
    back: propTypes.string,
}

export default SingleTicket;