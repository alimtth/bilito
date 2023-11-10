import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import close from '@/assets/Images/Icons/close-square.svg'
import Buttons from '@/components/Ui/Button'

function GeneralRules() {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-white  w-[900px] rounded-lg  shadow-lg z-50 py-7 px-5">
          <div className="flex justify-end">
            <Link to={'/ticket'}>
              <img src={close} alt="" />
            </Link>
          </div>
          <div className="flex gap-6">
            <ul>اطلاعات پرواز</ul>
            <ul>قوانین استرداد</ul>
            <ul>قوانین ویزا و مسیر</ul>
            <ul>بار مجاز</ul>
          </div>
          <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5" />
          <div className="flex flex-col gap-8 mb-[334px]">
            <h3 className="font-bold">قوانین عمومی سفر</h3>
            <p>
              ساعت الزامی حضور: از 4 ساعت قبل پروزا حضور الزامی است و 1 ساعت قبل
              پرواز سیستمهای پذیرش مسافر بسته خواهند شد.
            </p>
            <p>
              مسافران سیستمی بیزینس کلاس: مسافر که کلاس پروازی بیزینسی را انتخاب
              کردند می‌توانند به طور رایگان از سالن فرودگاه امام جهت پروازهای
              خروجی استفاده کنند
            </p>
          </div>
          <div className="flex justify-end items-center gap-3 mt-5">
            <div className="flex text-blue-500 gap-2">
              <h2>مجموع پرداختی شما</h2>
              <p>34,410,462</p>
              <p>تومان</p>
            </div>
            <Link to={'loadrules'}>
              <Buttons variant="fill" className={'w-[300px] justify-center'}>
                ادامه
              </Buttons>
            </Link>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default GeneralRules
