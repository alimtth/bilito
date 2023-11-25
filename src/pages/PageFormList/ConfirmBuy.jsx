// eslint-disable-next-line no-unused-vars
import React from 'react'
import iconUser from '@/assets/Images/Icons/iconUser.svg'
import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
import { Link } from 'react-router-dom'
import {usePassengerContext} from "@/providers/PassengerProvider.jsx";


export const ConfirmBuy = () => {
  const {passengerDetail} = usePassengerContext()

  // const newArrayPassenger = passengerDetail.map(item=>{
  //   return
  // })
  console.log(passengerDetail.national_code)
  return (
    <div>
      <div className="flex flex-col gap-10">
        {passengerDetail.map((detail,i) =>
            (<div key={i} className="flex flex-col gap-8 ">
                <div className="flex items-center gap-5">
                  <img src={iconUser} alt=""/>
                  <h3 className="flex flex-col justify-center">
                    <p className="font-bold">Mr.{detail.latin_name + detail.latin_last_name}</p>

                  </h3>
                </div>
                <div className="flex gap-6">
                  <p className="text-gray-500">رده سنی: بزرگسال</p>
                  <p className="text-gray-500">تاریخ تولد:{detail.birth_day}</p>
                  <p className="text-gray-500">کد ملی:{detail.national_code}</p>
                  <p className="text-gray-500">قیمت بیلیط:11٬470٬154 تومان</p>
                </div>
              </div>))}

        <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-1" />

        <div className="flex flex-col gap-10">
          <p className="text-gray-600">
            اگر کد تخفیف دارید، وارد کنید و دکمه ثبت را بزنید.
          </p>
          <div className="flex gap-6">
            <InputTextField size="slx">کد تخفیف</InputTextField>
            <Buttons variant="outline">ثبت</Buttons>
          </div>
        </div>
        <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-1" />
        <div className="flex gap-4">
          <input type="checkbox" />
          <p className="text-gray-500">استفاده از موجودی کیف پول</p>
        </div>
        <div className="flex mt-6 justify-between items-center">
            <Link to={"/form/data-form"}>
          <Buttons className={"outline-none border-none"}>بازگشت به مرحله قبل</Buttons>
            </Link>

            <h3 className='flex gap-8 items-center text-blue-500'>مجموع پرداختی شما 11٬470٬1543 تومان
            <Link to={"/payment"}>
                <Buttons  variant='fill' size='lg'>پرداخت</Buttons>
            </Link>
            </h3>
        </div>
      </div>
    </div>
  )
}
