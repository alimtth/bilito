import React, {useState} from 'react'
import Buttons from '@/components/Ui/Button'
import {Link} from 'react-router-dom'
import {useUser} from '@/providers/UserDataProvider'

function UserData() {
  const {userData, setUserData} = useUser()
  return (
    <>
      <div className="flex flex-col mt-16 ] ">
        <div className="flex justify-between items-center ">
          <h3 className="font-bold">اطلاعات حساب کاربری</h3>
        </div>
        <div className="flex outline p-5 outline-gray-400 rounded-lg mt-7  ">
          <div className="flex lg:flex-row flex-wrap justify-start gap-x-28 gap-y-12  basis-2/4">
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 font-light text-sm">
                نام و نام خانوادگی
              </span>
              <span className="text-gray-20 font-bold">
                {userData.fullName}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 font-light text-sm">جنسیت</span>
              <span className="text-gray-20 font-bold">{userData.gender}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 font-light text-sm">کدملی</span>
              <span className="text-gray-20 font-bold">
                {userData.nationalCode}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 font-light text-sm">
                شماره تماس
              </span>
              <span className="text-gray-20 font-bold">
                {userData.phoneNumber}
              </span>
            </div>
          </div>
          <div className="flex justify-end  basis-1/2">
            <Link to={'/account/edit-user'}>
              <Buttons className={'outline-none border-none'}>
                ویرایش اطلاعات
              </Buttons>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserData
