import InputTextField from '@/components/Ui/InputTextField';
import Buttons from '@/components/Ui/Button'
import React from 'react';

function EditUser() {
    return (
        <>
            <div className='flex flex-col mt-16'>
                <div className="flex justify-between items-center ">
                    <h3 className="font-bold">ویرایش اطلاعات</h3>
                </div>
                <div className="lg:outline outline-gray-400 rounded-lg mt-7 p-5 flex flex-col flex-wrap gap-8 justify-end">
                    <div className='flex flex-col lg:flex-row flex-wrap justify-around gap-8'>
                        <InputTextField className='w-full lg:w-[350px]' size={"ssl"}>
                            نام و نام خانوادگی
                        </InputTextField>
                        <InputTextField className='w-full lg:w-[350px]' size={"ssl"}>
                            جنسیت
                        </InputTextField>

                        <InputTextField className='w-full lg:w-[350px]' size={"ssl"}>
                            کد ملی
                        </InputTextField>
                        <InputTextField className='w-full lg:w-[350px]' size={"ssl"}>
                            شماره موبایل
                        </InputTextField>

                    </div>
                    <div className='justify-end flex'>
                        <Buttons variant='fill' className={"w-full lg:w-1/4 flex justify-center items-end"}>ویرایش
                            اطلاعات</Buttons>
                    </div>



                </div>
            </div>
        </>
    );
}

export default EditUser;