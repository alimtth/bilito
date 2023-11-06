import HeaderTabs from '@/components/NavBar/HeaderTabs';
import { useAuthContext } from '@/providers/AuthProvider';
import React from 'react';
import { Link, Outlet, redirect } from 'react-router-dom';
import profile from "@/assets/Images/Icons/profile-add.svg"

function BaseLayoutAcc() {
    const { currentUser, logout } = useAuthContext();
    return (
        <>
            <HeaderTabs />
                <div className="flex gap-7 mb-8" id='container'>
                    <div className="outline  outline-gray-400 rounded-lg mt-28">
                        <div className="flex flex-col gap-1 items-center px-28 py-5">
                            <img src={currentUser?.avatar} alt="" className='rounded-full w-48' />
                            <h4 className='mt-4 font-bold text-gray-500'>علی مطهری</h4>
                            <p className='text-gray-500'>۰۹‍۱۲۱۱۱۰۱۱۰</p>
                        </div>
                        <div className="flex flex-col items-start gap-7 w-full mr-2">
                            <hr className='w-full bg-gray-20' />
                            <Link to={"datauser"}>
                                <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} ><img src={profile} alt="" />اطلاعات حساب کاربری</p>
                            </Link>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} ><img src={profile} alt="" />سفرهای من</p>
                            <Link to={"myticket"}>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} ><img src={profile} alt="" />تیکت‌های من</p>
                            </Link>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}><img src={profile} alt=""/> کیف پول</p>
                            <p className={`flex items-center text-red-600 gap-3 mb-6 cursor-pointer w-72 h-12 rounded-md ''}`} onClick={logout}> <img src={profile} alt=""  />خروج از حساب کاربری</p>
                        </div>

                    </div>
            <main>
                <Outlet/>
            </main>
                </div>
            </>
    );
}

export default BaseLayoutAcc;