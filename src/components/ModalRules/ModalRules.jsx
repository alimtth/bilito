// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import close from '@/assets/Images/Icons/close-square.svg'
import Buttons from '@/components/Ui/Button'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import line from '@/assets/Images/Icons/Line.svg'
import {motion, AnimatePresence} from 'framer-motion'

// eslint-disable-next-line react/prop-types
export const ModalRules = ({showModal,setIsShow, forth, back, imagess, airname, flight_id, formattedDateArrival, date, price}) => {
    const [activeTab, setActiveTab] = useState(0)

    
  const [searchParams] = useSearchParams()
  const handlClose = () => {
    setIsShow(false)
  }
  const handleTapClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }
  const navigate = useNavigate()

  const handleSearchParam = () => {
    navigate({
      pathname: '/form/data-form',
      search: new URLSearchParams({
        flight_id: flight_id,
        capacity: searchParams.get('capacity'),
      }).toString(),
    })

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleStepTab = () => {
    setActiveTab((s) => s + 1)
  }

//   const combinedTime = {date  formattedDateArrival}

  return (
    <div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-70"
            initial={{opacity: 0}}
            animate={{opacity: 2}}
            exit={{opacity: 0}}
          >
            <motion.div
              className="bg-white w-[900px] rounded-lg shadow-lg z-50 py-5 px-5"
              initial={{scale: 0.95}}
              animate={{scale: 1}}
              exit={{scale: 0.95}}
            >
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <ul
                    className={activeTab === 0 ? 'text-blue-500' : ''}
                    onClick={() => handleTapClick(0)}
                  >
                    اطلاعات پرواز
                  </ul>
                  <ul
                    className={activeTab === 1 ? 'text-blue-500' : ''}
                    onClick={() => handleTapClick(1)}
                  >
                    قوانین استرداد
                  </ul>
                  <ul
                    className={activeTab === 2 ? 'text-blue-500' : ''}
                    onClick={() => handleTapClick(2)}
                  >
                    قوانین ویزا و مسیر
                  </ul>
                  <ul
                    className={activeTab === 3 ? 'text-blue-500' : ''}
                    onClick={() => handleTapClick(3)}
                  >
                    بار مجاز
                  </ul>
                </div>
                <div className="flex">
                  <img src={close} alt="" onClick={handlClose} />
                </div>
              </div>
              <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5" />

              {activeTab === 0 && (
                <div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <h3 className="flex justify-center ">
                        <img src={imagess} alt="" className="w-9  rounded-2xl ml-6" />
                        {airname}
                      </h3>
                      <p>مجموعا 19:00 ساعت</p>
                      <div className="flex flex-col gap-3">
                        <div className="bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                          صندلی باقی مانده
                        </div>
                        <div className="bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                          غیر قابل استرداد
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex gap-3">
                        <h3>{formattedDateArrival}</h3>
                        <p>{forth} &nbsp;فرودگاه امام </p>
                        <p>دوشنبه 6 شهریور (شماره پرواز: 615)</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                          اکونومی
                        </div>
                        <div className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                          سیستمی
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center -rotate-90 mt-20">
                        <img className="z-10" src={iconeairplan} />
                        <span className="absolute w-[142px] h-[1px] ">
                          <img src={line} />
                        </span>
                      </div>
                      <div className="bg-zard-100 w-[280px] py-2 px-2 rounded-lg mt-16 mr-16">
                        <h3 className="">
                          15:35 توقف در {forth}،فرودگاه Queen Alia
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between mt-16">
                      <div className="flex gap-3">
                        <h3>{date}</h3>
                        <p>{back} فرودگاه Queen Alia</p>
                        <p>دوشنبه 6 شهریور (شماره پرواز: 625)</p>
                      </div>
                      
                    </div>
                    
                    
                    <div className="flex justify-end items-center gap-3 mt-5">
                      <div className="flex text-blue-500 gap-2">
                        <h2>مجموع پرداختی شما</h2>
                        <p>{price}</p>
                        <p>تومان</p>
                      </div>
                      <Buttons
                        variant="fill"
                        className={'w-[300px] justify-center'}
                        onClick={handleStepTab}
                      >
                        ادامه
                      </Buttons>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <div className="flex flex-col gap-8 ">
                    <h3 className="font-bold">قوانین عمومی سفر</h3>
                    <p>
                      ساعت الزامی حضور: از 4 ساعت قبل پروزا حضور الزامی است و 1
                      ساعت قبل پرواز سیستمهای پذیرش مسافر بسته خواهند شد.
                    </p>
                    <p>
                      مسافران سیستمی بیزینس کلاس: مسافر که کلاس پروازی بیزینسی
                      را انتخاب کردند می‌توانند به طور رایگان از سالن فرودگاه
                      امام جهت پروازهای خروجی استفاده کنند
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-3 mt-5">
                    <div className="flex text-blue-500 gap-2">
                      <h2>مجموع پرداختی شما</h2>
                      <p>34,410,462</p>
                      <p>تومان</p>
                    </div>
                    <Buttons
                      variant="fill"
                      className={'w-[300px] justify-center'}
                      onClick={handleStepTab}
                    >
                      ادامه
                    </Buttons>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <div className="flex flex-col gap-8">
                    <h3 className="font-bold">قوانین استرداد</h3>
                    <p>
                      70 درصد جریمه: از ساعت 11:00 صبح 8 روز قبل از پرواز تا
                      ساعت 11:00 صبح 3 روز قبل از پرواز.
                    </p>
                    <p>
                      55 درصد جریمه: از زمان صدور بلیط تا ساعت 11:00 صبح 8 روز
                      قبل از پرواز.
                    </p>
                    <p>
                      80 درصد جریمه: از ساعت 11:00 صبح 3 روز قبل از پرواز تا
                      ساعت 11:00 صبح 2 روز قبل از پرواز.
                    </p>
                    <p>
                      100 درصد جریمه: از ساعت 11:00 صبح 2 روز قبل از پرواز به
                      بعد.
                    </p>
                    <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5" />
                    <h3 className="font-bold">قوانین تغییرات بلیط</h3>
                    <p>
                      تا 24 ساعت مانده به پرواز به مسافران جهت تغییر رزرو جریمه
                      ای تعلق نمی‌گیرد. (هزینه تغییر کلاس نرخی دریافت می‌شود) از
                      24 ساعت مانده به پرواز به بعد به‌ازای هر مسافر در هر مسیر
                      پروازی، جریمه تغییر رزرو معادل 1٬300٬000 تومان ایران
                      (باضافه هزینه تغییر کلاس نرخی) می‌باشد.
                    </p>
                  </div>

                  <div className="flex justify-end items-center gap-3 mt-5">
                    <div className="flex text-blue-500 gap-2">
                      <h2>مجموع پرداختی شما</h2>
                      <p>34,410,462</p>
                      <p>تومان</p>
                    </div>
                    <Buttons
                      variant="fill"
                      className={'w-[300px] justify-center'}
                      onClick={handleStepTab}
                    >
                      ادامه
                    </Buttons>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <div className="flex flex-col gap-8">
                    <h3 className="font-bold">قوانین بار</h3>
                    <p>
                      حداکثر تعداد بسته: به ازای هر مسافر برابر 2 بسته می باشد.
                    </p>
                    <p>میزان بار دستی مجاز: 5 کیلوگرم.</p>
                    <p>میزان بار مجاز برای بزرگسال و کودک: 30 کیلوگرم.</p>
                    <p>میزان بار مجاز برای نوزاد: 10 کیلوگرم.</p>
                    <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5" />
                    <h3 className="font-bold ">قوانین تغییرات بار</h3>
                    <p className="mb-12">
                      هزینه بار اضافی در فرودگاه شهر مبدا برابر 200٬000 تومان
                      ایران می‌باشد.
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-3 mt-5">
                    <div className="flex text-blue-500 gap-2">
                      <h2>مجموع پرداختی شما</h2>
                      <p>34,410,462</p>
                      <p>تومان</p>
                    </div>

                    <Buttons
                      onClick={handleSearchParam}
                      variant="fill"
                      className={'w-[300px] justify-center'}
                    >
                      ادامه
                    </Buttons>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
