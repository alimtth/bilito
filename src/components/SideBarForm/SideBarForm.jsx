// eslint-disable-next-line no-unused-vars
import React from 'react'
import airport from '@/assets/Images/Icons/Airport.png'
import {IoIosArrowDown} from 'react-icons/io'
import {Slider} from '@mui/material'

// eslint-disable-next-line react/prop-types
export const SideBarForm = ({searchData}) => {
  return (
    <div>
        <div className="lg:block lg:bg-gray-400 lg:rounded-md lg:basis-[25%] lg:p-6 hidden sticky top-0">
          <div className="flex justify-between">
            <h3>تعداد نتایج: {searchData.length}</h3>
            <h3 className="text-blue-500 text-[13px]"> پاک کردن فیلتر‌ها</h3>
          </div>
          <hr className="mt-[16px] bg-gray-500 w-full h-[2px]" />
          <div className="flex justify-between mt-[16px]">
            <h4>قیمت</h4>
            <IoIosArrowDown />
          </div>
          <div className="flex justify-between mt-[10px]">
            <h4>تا 60.000.000</h4>
            <h4>از 60.000.000</h4>
          </div>
          <div className="flex-col mt-[10px]">
            <Slider
              getAriaLabel={() => 'Temperature range'}
              valueLabelDisplay="auto"
            />
          </div>
          <hr className="mt-[14px] bg-gray-500 w-full h-[2px]" />
          <div className="flex justify-between mt-[16px]">
            <h4>زمان حرکت</h4>
            <IoIosArrowDown />
          </div>
          <div className="flex justify-between mt-[10px]">
            <h4>24:00</h4>
            <h4>00:00</h4>
          </div>
          <div className="flex-col mt-[10px]">
            <Slider
              getAriaLabel={() => 'Temperature range'}
              valueLabelDisplay="auto"
            />
          </div>
          <hr className="mt-[14px] bg-gray-500 w-full h-[2px]" />
          <div className="flex justify-between mt-[16px]">
            <h4>شرکت هواپیمایی </h4>
            <IoIosArrowDown />
          </div>
          <div className="flex flex-col gap-4 items-start mt-[17px]">
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">Pegasus</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">gulf</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">emirates</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">oman</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">Qatar Airways</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">Fly dubai</h3>
            </div>
            <hr className="mt-[16px] bg-gray-500 w-full h-[2px]" />
          </div>
        </div>
    </div>
  )
}
