import NavBar from '@/components/NavBar';
import HeaderTabs from '@/components/NavBar/HeaderTabs';
import React, { useState } from 'react';
import Buttons from '@/components/Ui/Button'
import deletesss from "@/assets/Images/Icons/delete.png";
import undo from "@/assets/Images/Icons/undo.png"
import arrowdown from "@/assets/Images/Icons/arrow-down.svg"
import calendar from "@/assets/Images/Icons/calendar.svg"
import like from "@/assets/Images/Icons/like.png"
import dislike from "@/assets/Images/Icons/dislike.png"
import profile from "@/assets/Images/Icons/profile-add.svg"
import { useAuthContext } from '@/providers/AuthProvider';
import InputTextField from '@/components/Ui/InputTextField';

const AccountPage = () => {
    const { currentUser, logout } = useAuthContext();
    const [selected, setSelected] = useState(false);
    const [editUser, setEditUser] = useState(false);

    const handlChangSelected = () => {
        setSelected(!selected)
    }

    const handlEdit = () => {
        setEditUser(true);
    }
    console.log(editUser);
    return (
        <div>
            <HeaderTabs />
            <div id='container'>
                <div className="flex gap-7">
                    <div className="outline  outline-gray-400 rounded-lg mt-28">
                        <div className="flex flex-col gap-1 items-center px-28 py-5">
                            <img src={currentUser?.avatar} alt="" className='rounded-full w-48' />
                            <h4 className='mt-4 font-bold text-gray-500'>علی مطهری</h4>
                            <p className='text-gray-500'>۰۹‍۱۲۱۱۱۰۱۱۰</p>
                        </div>
                        <div className="flex flex-col items-start gap-7 w-full mr-2">
                            <hr className='w-full bg-gray-20' />
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md ${selected === true ? 'bg-blue-100' : ''}`} onClick={handlChangSelected}><img src={profile} alt="" />اطلاعات حساب کاربری</p>

                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md ${selected === 1 ? 'bg-blue-100' : ''}`} onClick={handlChangSelected}><img src={profile} alt="" />سفرهای من</p>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md ${selected === 2 ? 'bg-blue-100' : ''}`} onClick={handlChangSelected}><img src={profile} alt="" />تیکت‌های من</p>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md ${selected === 3 ? 'bg-blue-100' : ''}`} onClick={handlChangSelected}><img src={profile} alt="" />کیف پول</p>
                            <p className={`flex items-center text-red-600 gap-3 mb-6 cursor-pointer w-72 h-12 rounded-md ${selected === 4 ? 'bg-blue-100' : ''}`} onClick={logout}><img src={profile} alt="" />خروج از حساب کاربری</p>
                        </div>
                    </div>
                    {selected ? (
                        editUser ? (
                            <div className='flex flex-col w-full mt-16 '>
                            <div className="flex justify-between items-center ">
                                <h3 className="font-bold">ویرایش اطلاعات</h3>
                            </div>
                            <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                                <div className="flex justify-between">
                                    <InputTextField size={"xsl"}>
                                    نام و نام خانوداگی
                                    </InputTextField>
                                    <InputTextField size={"xsl"}>
                                    جنسیت
                                    </InputTextField>
                                </div>
                                <div className="flex justify-between mt-8">
                                    <InputTextField size={"xsl"} >
                                    کد ملی
                                    </InputTextField>
                                    <InputTextField size={"xsl"}>
                                    شماره موبایل
                                    </InputTextField>
                                </div>
                                <div className='flex justify-end mt-5'>
                                <Buttons variant='fill' className={"w-36 flex justify-center items-end" }>ثبت</Buttons>
                                </div>
                            </div>
                        </div>
                        ):(
                        <div className='flex flex-col w-full mt-16 '>
                            <div className="flex justify-between items-center ">
                                <h3 className="font-bold">اطلاعات حساب کاربری</h3>
                            </div>
                            <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                                <div className="flex justify-between">
                                    <p className="flex gap-20 justify-center items-center text-gray-500">نام و نام خانوادگی<p>جنسیت</p></p>
                                    <Buttons className={"outline-none border-none"} onClick={handlEdit}>ویرایش اطلاعات</Buttons>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className='mt-3 flex gap-32 text-lg text-black'>علی مطهری<h2>مرد</h2></h2>
                                    <p className="flex gap-36  text-gray-500 mt-10">کد ملی<p>شماره تماس</p></p>


                                    <h2 className='mt-3 flex gap-20 text-lg text-black'>۰۳۷۲۹۴۴۳۱۰ <h2>۰۹‍۱۲۱۱۱۰۱۱۰</h2></h2>
                                </div>
                            </div>
                        </div>
                        )
                    ) : (
                        <div className='flex flex-col w-full mt-11 '>
                            <div className="flex justify-between items-center ">
                                <h3 className="font-bold">  تیکت‌های من</h3>
                                <Buttons variant='grayBTN'>
                                    مرتب سازی
                                    <img src={arrowdown} alt="" />
                                </Buttons>
                            </div>
                            <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                                <div className="flex justify-between">

                                    <p className='text-gray-500 flex gap-2'><img src={calendar} alt="" />۱۴:۵۳ - ۱۴۰۲/۶/۰۷</p>
                                    <img src={deletesss} alt="" />
                                </div>
                                <h2 className='text-gray-500 mt-3'>چگونه می‌توانم از سایت شما بلیط اوکراین را رزرو کنم؟</h2>
                                <div className="flex justify-between mt-5">
                                    <p className="flex gap-3"><img src={undo} alt="" />با سلام و وقت بخیر. لطفا به قسمت راهنمای تهیه بلیط در بخش هدر مراجعه نمایید.</p>
                                    <div className='flex justify-center items-center gap-2'>
                                        <img src={dislike} alt="" />
                                        <img src={like} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>



            </div>

        </div>
    );
};

export default AccountPage;