// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeaderTabs from '@/components/NavBar/HeaderTabs'
import styles from './style.module.css'
import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import { BilitForm } from '@/components/BilitForm/BilitForm'

export const BaseLayoutsForm = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(10)

  function updateTime() {
    if (minutes == 0 && seconds == 0) {
      setSeconds(0)
      setMinutes(10)
    } else {
      if (seconds == 0) {
        setMinutes((minutes) => minutes - 1)
        setSeconds(59)
      } else {
        setSeconds((seconds) => seconds - 1)
      }
    }
  }

  useEffect(() => {
    const token = setTimeout(updateTime, 1000)

    return function cleanUp() {
      clearTimeout(token)
    }
  })
  return (
    <div>
      <div id="container">
        <HeaderTabs />
        <hr />
        <div className={styles.hidden_mobile + "my-8 border border-gray-100 rounded-lg"}>
            <BilitForm />
          <div className="p-8 flex items-start justify-between">
            <div className="flex justify-center items-center gap-[8px]">
              <div className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-8 border rounded-md">
                اکونومی
              </div>
              <div className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-8 border rounded-md">
                سیستمی
              </div>
            </div>
            <div className="gap-1 flex">
              <div className="gap-3 flex">
                <p className="text-lg text-blue-500">مجموع پرداختی شما</p>
                <p className="text-lg text-blue-500">34,410,462</p>
              </div>
              <p className="text-lg text-blue-500">تومان</p>
            </div>
          </div>
        </div>

        <div className="outline p-5 outline-gray-400 rounded-lg mt-7 mb-9  ">
          <div className="px-2 py-[10px] w-full flex justify-between ">
            <p className="font-bold">مشخصات </p>
            <div className="flex gap-2">
              <p>زمان باقی مانده:</p>
              <p className="text-orange-600">
                {' '}
                {minutes}:{seconds}
              </p>
            </div>
          </div>
          <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5" />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
