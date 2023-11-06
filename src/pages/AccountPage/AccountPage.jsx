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
// import BaseLayoutAcc from './BaseLayoutsAccount/BaseLayoutAcc';

const AccountPage = () => {
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
                    <div className='flex'>

                        </div> 
                        {/* <BaseLayoutAcc /> */}
                    
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
            

                </div>



            </div>

        </div>
    );
};

export default AccountPage;