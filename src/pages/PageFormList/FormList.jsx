import React, { useEffect, useState } from 'react'
import HorizontalLinearStepper from '@/components/Stepper/LinearStepper'
import HeaderTabs from '@/components/NavBar/HeaderTabs'
import InputTextField from '@/components/Ui/InputTextField'
import omanAir from '@/assets/Images/Icons/airlinelogoweb.svg'
import iconetimer from '@/assets/Images/Icons/timer.svg'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import iconbag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
import Buttons from '@/components/Ui/Button'
import { IoIosArrowDown } from "react-icons/io";


function FormListe() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(10)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);


  const handleDay = () => {
    console.log();
  }


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  function updateTime() {
    if (minutes == 0 && seconds == 0) {
      setSeconds(0);
      setMinutes(10);
    }
    else {
      if (seconds == 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }
  }
  useEffect(() => {
    const token = setTimeout(updateTime, 1000)

    return function cleanUp() {
      clearTimeout(token);
    }
  })


  return (

    <div id='container'>
      <HeaderTabs />
      <hr />
      <HorizontalLinearStepper />

      <div className='my-8 border border-gray-100 rounded-lg hidden-mobile'>
        <div className='p-6 flex justify-between'>

          <div className='pt-6 gap-6 w-[575px] flex items-center '>
            <img src={omanAir} />
            <div>
              <div className='pl-8 gap-2 flex flex-col items-center'>
                <p>02:50</p>
                <p className='text-gray-600'>استانبول(SAW)</p>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <div className='gap-6 flex flex-col'>
                <div className='gap-[2px] flex items-center justify-center'>
                  <img src={iconetimer} />
                  <p className='text-gray-500 '>19:00</p>
                </div>
                <div className='relative flex items-center justify-center '>
                  <img className='z-20' src={iconeairplan} />
                  <span className='absolute w-[142px] h-[1px] fill-none z-10'>
                    <img src={line} />
                  </span>

                </div>
                <div className='gap-[2px] flex items-center justify-center'>
                  <img src={iconbag} />
                  <p className='text-gray-500'>20Kg</p>
                </div>
              </div>
            </div>

            <div className='pr-8 gap-2 flex flex-col items-center'>
              <p>21:50</p>
              <p className='text-gray-600'>دبی(DXB)</p>
            </div>
            <div className='pr-6 flex items-center'>
              <p >  دوشنبه 6 شهریور</p>
            </div>
          </div>
          <div className='pt-4 flex items-start '>
            <Buttons className={`gap-0 text-blue-500 border-none`}>
              جزییات قیمت
              <IoIosArrowDown />
            </Buttons>
          </div>

        </div>
        <div>
        </div>

        <div className='p-8 flex items-start justify-between'>
          <div className='flex justify-center items-center gap-[8px]'>
            <div
              className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-8 border rounded-md'>اکونومی
            </div>
            <div
              className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-8 border rounded-md'>سیستمی
            </div>
          </div>
          <div className='gap-1 flex'>
            <div className='gap-3 flex'>
              <p className='text-lg text-blue-500'>مجموع پرداختی شما</p>
              <p className='text-lg text-blue-500'>34,410,462</p>
            </div>
            <p className='text-lg text-blue-500'>تومان</p>
          </div>

        </div>

      </div>


      <div className="outline p-5 outline-gray-400 rounded-lg mt-7 mb-9  ">
        <div className='px-2 py-[10px] w-full flex justify-between '>
          <p className='font-bold'>مشخصات مسافران</p>
          <div className='flex gap-2' >
            <p>زمان باقی مانده:</p>
            <p className='text-orange-600'> {minutes}:{seconds}</p>
          </div>
        </div>
        <hr className='w-full bg-gray-400 h-0.5 mt-3 mb-5' />
        <p className='mt-10'>بزرگسال</p>
        <div className="p-6 px-0 w-full gap-3 flex flex-col lg:flex lg:flex-row ">
          <InputTextField size={"sll"} >
            نام لاتین
          </InputTextField>
          <InputTextField size={"sll"} >
            نام خانوادگی
          </InputTextField>
          <InputTextField size={"sll"} >
            جنسیت
          </InputTextField>
          <div className="flex space-x-1">
            <div className="border border-gray-500 w-40 flex items-center px-4 rounded-r-lg justify-between" onClick={toggleDropdown} >روز<IoIosArrowDown /></div>
            {isDropdownOpen && (
              <div className='flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 mt-14'>
                {[...Array(30)].map((_, index) => (
                  <ul key={index} onClick={handleDay} className={`w-4 h-8 flex-shrink-0 cursor-pointer ${selectedDay ? index === 'bg-blue-500 text-white' : ''}`}
                  >{index + 1}</ul>
                ))}
              </div>
            )}
            <div className="border border-gray-500 w-40 flex items-center px-4 justify-between">ماه<IoIosArrowDown /></div>
            <div className="border border-gray-500 w-40 flex items-center px-4 rounded-l-lg justify-between">سال<IoIosArrowDown /></div>
          </div>
        </div>


        <div className="p-6 px-0 w-full gap-3  flex flex-col lg:flex lg:flex-row">
          <InputTextField size={"sll"} >
            ملیت
          </InputTextField>
          <InputTextField size={"sll"} >
            کد ملی
          </InputTextField>
          <InputTextField size={"sll"} >
            شماره یا پاسپورت
          </InputTextField>
          <div className="flex rounded-lg ">
            <div className="border border-gray-500 w-40 flex items-center px-4 rounded-r-lg justify-between">روز<IoIosArrowDown /></div>
            <div className="border border-gray-500 w-40 flex items-center px-4 justify-between">ماه<IoIosArrowDown /></div>
            <div className="border border-gray-500 w-40 flex items-center px-4 rounded-l-lg justify-between">سال<IoIosArrowDown /></div>
          </div>
        </div>
        <hr />
        <p className='mt-10'>کودک</p>
        <div className="p-6 px-0 w-full gap-3 flex flex-col lg:flex lg:flex-row ">
          <InputTextField size={"sll"} >
            نام لاتین
          </InputTextField>
          <InputTextField size={"sll"} >
            نام خانوادگی
          </InputTextField>
          <InputTextField size={"sll"} >
            جنسیت
          </InputTextField>
          <div className="flex rounded-lg ">
            <div className="border border-gray-500 w-40 flex items-center px-4 rounded-r-lg justify-between">روز<IoIosArrowDown /></div>
            <div className="border border-gray-500 w-40 flex items-center px-4 justify-between">ماه<IoIosArrowDown /></div>
            <div className="border border-gray-500 w-40 flex items-center px-4 rounded-l-lg justify-between">سال<IoIosArrowDown /></div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default FormListe