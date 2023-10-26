import React from 'react'
import titlePic from "@/assets/Images/titlePic.png";
import { IoIosArrowDown } from "react-icons/io"
import airplane from '@/assets/Images/Icons/airplaneBorder.svg'
import calendar from '@/assets/Images/Icons/calendar.svg'
import profileAdd from '@/assets/Images/Icons/profile-add.svg'
import EditPen from '@/assets/Images/Icons/edit.svg'
import Button from '@/components/Ui/Button';

function TickedList() {
  return (
    <div className=' flex flex-col items-center'>
      <section className="flex flex-col relative items-center">
        <img src={titlePic} />
      </section>

      <section className="-m-12 z-10 bg-white flex flex-col items-center rounded-lg shadow-2xl">
        <div className='p-6 gap-8 flex flex-shrink-0 justify-center items-center  font-bold'>
          <div className='gap-2 flex items-center'>
            <img src={airplane} />
            <p>بلیط همواپیما استانبول به دبی</p>
          </div>

          <div className='gap-2 flex items-center'>
            <img src={calendar} />
            <p>دوشنبه 6 شهریور</p>
          </div >

          <div className='gap-2 flex items-center'>
            <img src={profileAdd} />
            <p>3 مسافر</p>
          </div>

          <div className='gap-2 flex items-center'>
            <img src={calendar} />
            <p>اکونومی</p>
          </div>
          <Button variant='fill'><img src={EditPen} /></Button>

        </div>

      </section>
      
      <div className='mt-20 gap-8 flex flex-row '>
        <div className='gap-2 py-2 px-4 flex flex-shrink-0 flex-col items-start border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 w-[745px] '>
          <div className='flex justify-between items-center self-stretch '>
            <p>تقویم قیمتی</p>
            <IoIosArrowDown />
          </div>
        </div>

        <div className='gap-2 py-2 px-6 flex  justify-center items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 '>
          <div className='flex  justify-between items-center '>
            <p>متن ورودی</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>














    </div>
  )
}

export default TickedList