import React from 'react';
import BaseLayoutAcc from '../BaseLayoutsAccount/BaseLayoutAcc';
import InputTextField from '@/components/Ui/InputTextField';
import Buttons from '@/components/Ui/Button'

function EditUserData() {
    return (
        <div>
            <div id="container" className='flex basis-1/4'>
                    <div className='flex flex-col w-full mt-16 '>
                            <div className="flex justify-between items-center ">
                                <h3 className="font-bold">ویرایش اطلاعات</h3>
                            </div>
                            <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                                <div className="flex justify-between">
                                    <InputTextField size={"xsl"}>
                                    نام و نام خانوادگی
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
            </div>
        </div>
    );
}

export default EditUserData;