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
          <div className="flex flex-col gap-8">
            <h3 className="font-bold">قوانین بار</h3>
            <p>حداکثر تعداد بسته: به ازای هر مسافر برابر 2 بسته می باشد.</p>
            <p>میزان بار دستی مجاز: 5 کیلوگرم.</p>
            <p>میزان بار مجاز برای بزرگسال و کودک: 30 کیلوگرم.</p>
            <p>میزان بار مجاز برای نوزاد: 10 کیلوگرم.</p>
            <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5" />
            <h3 className="font-bold ">قوانین تغییرات بار</h3>
            <p className="mb-12">
              هزینه بار اضافی در فرودگاه شهر مبدا برابر 200٬000 تومان ایران
              می‌باشد.
            </p>
          </div>
          <div className="flex justify-end items-center gap-3 mt-5">
            <div className="flex text-blue-500 gap-2">
              <h2>مجموع پرداختی شما</h2>
              <p>34,410,462</p>
              <p>تومان</p>
            </div>
            <Link to={'/form'}>
              <Buttons variant="fill" className={'w-[300px] justify-center'}>
                ادامه
              </Buttons>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadRules
