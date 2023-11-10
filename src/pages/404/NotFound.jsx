import React from 'react'
import Notf from '@/assets/Images/Icons/Component 137.png'
import {ArrowBackIos} from '@mui/icons-material'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center ">
      <img src={Notf} alt="error 404" className=" w-[708px]" />
      <Link to={'/'}>
        <button className="mt-[30px] text-blue-650">
          برگشت به صفحه اصلی
          <ArrowBackIos />
        </button>
      </Link>
    </div>
  )
}

export default NotFound
