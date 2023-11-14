// eslint-disable-next-line no-unused-vars
import React from 'react'
import iconUser from '@/assets/Images/Icons/iconUser.svg'
import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
import { Link } from 'react-router-dom'

const dataForm = [
  {
    nameEnM: 'ali motahari',
    nameFaM: 'علی مطهری',
    agesM: 'صغیرسال',
    dateM: '1575/04/25',
    priceBiliM: '11٬470٬154',
    imgM: iconUser,
  },
  {
    nameEnW: 'ali mamd',
    nameFaW: 'علی ممد',
    agesW: 'میان سال',
    dateW: '1345/04/25',
    priceBilitW: '11٬470٬54',
    imgW: iconUser,
  },
]
export const ConfirmBuy = () => {
  return (
    <div>
      {/* {dataForm.map((item, index) => {
            
        })} */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-5">
            <img src={iconUser} alt="" />
            <h3 className="flex flex-col justify-center">
              <p className="font-bold">Mr.Ali Motahari</p>
              <p className="text-gray-450">آقای علی مطهری</p>
            </h3>
          </div>
          <div className="flex gap-6">
            <p className="text-gray-500">رده سنی: بزرگسال</p>
            <p className="text-gray-500">تاریخ تولد1375/04/25:</p>
            <p className="text-gray-500">کد ملی:0372944310</p>
            <p className="text-gray-500">قیمت بیلیط:11٬470٬154 تومان</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-5">
            <img src={iconUser} alt="" />
            <h3 className="flex flex-col justify-center">
              <p className="font-bold">Mrs.zahra Amiri</p>
              <p className="text-gray-450">خانم زهرا امیری</p>
            </h3>
          </div>
          <div className="flex gap-6">
            <p className="text-gray-500">رده سنی: کودک</p>
            <p className="text-gray-500">تاریخ تولد1395/04/25:</p>
            <p className="text-gray-500">کد ملی:1234567876543</p>
            <p className="text-gray-500">قیمت بیلیط:11٬470٬14 تومان</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-5">
            <img src={iconUser} alt="" />
            <h3 className="flex flex-col justify-center">
              <p className="font-bold">Mr.Mamad Hossein</p>
              <p className="text-gray-450">آقای محمد حسین فلان</p>
            </h3>
          </div>
          <div className="flex gap-6">
            <p className="text-gray-500">رده سنی: میان سال</p>
            <p className="text-gray-500">تاریخ تولد1375/04/25:</p>
            <p className="text-gray-500">کد ملی:0372944310</p>
            <p className="text-gray-500">قیمت بیلیط:11٬470٬154 تومان</p>
          </div>
        </div>
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
                <Buttons  variant='fill' size='lg'>پرداخت</Buttons>
            </h3>
        </div>
      </div>
    </div>
  )
}
