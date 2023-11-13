import close from '@/assets/Images/Icons/close-square.svg'
import Buttons from '@/components/Ui/Button'
import {Link} from 'react-router-dom'
function LoadRules() {
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
         
        </div>
      </div>
    </div>
  )
}

export default LoadRules
