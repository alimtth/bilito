import React from 'react';
import Buttons from '@/components/Ui/Button'
import HeaderTabs from '@/components/NavBar/HeaderTabs';
import BaseLayoutAcc from '../BaseLayoutsAccount/BaseLayoutAcc';
import { Link, Outlet } from 'react-router-dom';

function UserData() {
    return (
        <div>
            <div id="container">
                    <div className='flex flex-col mt-16 ]'>
                        <div className="flex justify-between items-center ">
                            <h3 className="font-bold">اطلاعات حساب کاربری</h3>
                        </div>
                        <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                            <div className="flex justify-between">
                                <p className="flex gap-20 justify-center items-center text-gray-500">نام و نام خانوادگی<p>جنسیت</p></p>
                                <Link to={"edituser"}>
                                <Buttons className={"outline-none border-none"} >ویرایش اطلاعات</Buttons>
                                </Link>
                            </div>
                            <div className="flex flex-col">
                                <h2 className='mt-3 flex gap-32 text-lg text-black'>علی مطهری<h2>مرد</h2></h2>
                                <p className="flex gap-36  text-gray-500 mt-10">کد ملی<p>شماره تماس</p></p>
                                <h2 className='mt-3 flex gap-20 text-lg text-black'>۰۳۷۲۹۴۴۳۱۰ <h2>۰۹‍۱۲۱۱۱۰۱۱۰</h2></h2>
                            </div>
                        </div>
                    </div>
                    <main>
                        <Outlet />
                    </main>
            </div>
        </div>
    );
}

export default UserData;