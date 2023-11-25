// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeaderTabs from '@/components/NavBar/HeaderTabs'
import {useEffect, useState} from 'react'
import {Outlet, useSearchParams} from 'react-router-dom'
import {BilitForm} from '@/components/BilitForm/BilitForm'
import {useQuery} from '@tanstack/react-query'
import {apiGetFlightDetail} from '@/api/search'
import Swal from 'sweetalert2'

export const BaseLayoutsForm = () => {
  const [time, setTime] = useState(12)
  const [searchParams] = useSearchParams()

  // const flight_id = searchParams.get('flight_id')

  // const flightQuery = useQuery({
  //   queryKey: ['flight', flight_id],
  //   queryFn: () => apiGetFlightDetail(flight_id),
  // })

  

  const formatTime = () => {
    if (time > 0) {
      const minutes = Math.floor(time / 60)
      const remainingSeconds = time % 60
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }
  }
  useEffect(() => {
    let timer = null

    timer = setInterval(() => {
      setTime((prevSeconds) => prevSeconds - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  function showAlertErr() {
    Swal.fire({
      title: 'وقت خرید تموم شد',
      text: 'تلاش دوباره',
      icon: 'error',
      confirmButtonText: 'برگشت',
    })
  }
  useEffect(() => {
    if (time === 0) {
      showAlertErr()
    }
  }, [time])

  
  return (
    <div>
      <div className="custom-container">
        <HeaderTabs />
        <hr />
        <div className="my-8 border border-gray-100 rounded-lg">
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
                {time > 0 ? formatTime() : '0:00'}
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
