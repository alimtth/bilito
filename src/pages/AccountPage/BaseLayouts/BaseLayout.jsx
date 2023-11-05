import { useAuthContext } from '@/providers/AuthProvider';
import React from 'react';
import profile from "@/assets/Images/Icons/profile-add.svg"
import HomePageComponenets from '@/components/HomePagePictures/HomePageComponenets';


function BaseLayout() {
    const { currentUser, logout } = useAuthContext();
    return (
        <div>
            <div className="outline  outline-gray-400 rounded-lg mt-28">
                        <div className="flex flex-col gap-1 items-center px-28 py-5">
                            <img src={currentUser?.avatar} alt="" className='rounded-full w-48' />
                            <h4 className='mt-4 font-bold text-gray-500'>علی مطهری</h4>
                            <p className='text-gray-500'>۰۹‍۱۲۱۱۱۰۱۱۰</p>
                        </div>
                        <div className="flex flex-col items-start gap-7 w-full mr-2">
                            <hr className='w-full bg-gray-20' />
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} ><img src={profile} alt="" />اطلاعات حساب کاربری</p>

                            {/* <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} ><img src={profile} alt="" />سفرهای من</p>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} ><img src={profile} alt="" />تیکت‌های من</p>
                            <p className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `} src={profile} alt="" />کیف پول</p>
                            <p className={`flex items-center text-red-600 gap-3 mb-6 cursor-pointer w-72 h-12 rounded-md ''}`} <img src={profile} alt="" />خروج از حساب کاربری</p> */}
                        </div>
                    </div>
        </div>
    );
}

export default BaseLayout;