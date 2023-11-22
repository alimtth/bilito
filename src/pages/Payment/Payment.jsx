import HeaderTabs from '@/components/NavBar/HeaderTabs'
// eslint-disable-next-line no-unused-vars
import paymant from '@/assets/Images/Icons/paymant.svg'
// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react'
import Buttons from '@/components/Ui/Button'
import arrowdown from '@/assets/Images/Icons/arrow-down.svg'
import arrowUp from '@/assets/Images/Icons/arowUp.svg'
import airplane from '@/assets/Images/Icons/airplane-square.svg'
import omanAir from '@/assets/Images/Icons/airlinelogoweb.svg'
import iconetimer from '@/assets/Images/Icons/timer.svg'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import iconbag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
import {Link} from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import wallet from '@/assets/Images/Icons/wallet.svg'
import backHome from '@/assets/Images/Icons/backHome.svg'
import noPayment from '@/assets/Images/Icons/noPayment.svg'

export const Payment = () => {
  const [loading, setLoading] = useState(false)
  const downloadPDF = () => {
    const download = document.querySelector('.download')
    setLoading(true)
    html2canvas(download).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      setLoading(false)
      doc.save('bilito.pdf')
    })
  }
  const [showDetails, setShowDetails] = useState(false)
  const [payments, setPayments] = useState(false)

  const hanldTest = () => {
    setPayments(!payments)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div>
      <HeaderTabs />
      <div id="container">
        {payments ? (
          <div className="ypayment">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center">
                <div className="w-3/4 bg-green-50 h-7 flex justify-center items-center py-8 gap-4 text-green-700 rounded-lg">
                  <img src={paymant.src} alt="" className="animate-pulse" />
                  پرداخت شما با موفقیت انجام شد.
                </div>
              </div>
              <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                <div className="flex justify-between">
                  <h3 className="flex gap-4">
                    <img src={airplane.src} alt="" />
                    پرواز استانبول به دبی
                  </h3>
                  <div className=" text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                    مجموع پرداختی شما34,410,462 تومان
                  </div>
                </div>
                <div className="flex items-center mt-7 justify-between">
                  <div className="flex gap-7 items-center">
                    <ul className="text-gray-600 flex">
                      شماره رزرو:<p className="text-black">123456</p>
                    </ul>
                    <ul className="text-gray-600 flex">
                      تاریخ رزرو:<p className="text-black">1402/02/18</p>
                    </ul>
                    <ul className="text-gray-600 flex">
                      تاریخ پرواز:<p className="text-black">1402/06/25</p>
                    </ul>
                    <ul className="text-gray-600 flex">
                      مبلغ کل سفارش:
                      <p className="text-black">11٬470٬154تومان</p>
                    </ul>
                  </div>
                  {showDetails ? (
                    <div></div>
                  ) : (
                    <div onClick={toggleDetails}>
                      <Buttons className={'border-none'}>
                        جزئیات سفر
                        <img src={arrowdown} alt="" />
                      </Buttons>
                    </div>
                  )}
                </div>
                {showDetails ? (
                  <div className="download">
                    <div className="flex flex-col">
                      <div className="flex mt-9">
                        <div className="pb-5 gap-6 w-[575px] flex items-center ">
                          <img src={omanAir.src} />
                          <div>
                            <div className="pl-8 gap-2 flex flex-col items-center">
                              <p>02:50</p>
                              <p className="text-gray-600">(SAW)</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="gap-6 flex flex-col">
                              <div className="gap-[2px] flex items-center justify-center">
                                <img src={iconetimer.src} />
                                <p className="text-gray-500 ">19:00</p>
                              </div>
                              <div className="relative flex items-center justify-center ">
                                <img className="z-20" src={iconeairplan} />
                                <span className="absolute w-[142px] h-[1px] fill-none z-10">
                                  <img src={line.src} />
                                </span>
                              </div>
                              <div className="gap-[2px] flex items-center justify-center">
                                <img src={iconbag.src} />
                                <p className="text-gray-500">20Kg</p>
                              </div>
                            </div>
                          </div>

                          <div className="pr-8 gap-2 flex flex-col items-center">
                            <p>21:50</p>
                            <p className="text-gray-600">(DXB)</p>
                          </div>
                        </div>
                        <div className="flex gap-10">
                          <ul className="flex flex-col">
                            شماره پرواز <p>165</p>
                          </ul>
                          <ul className="flex flex-col">
                            کلاس پرواز <p>کوانومی</p>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 mt-8 ">
                        <div className="flex text-gray-600 gap-11">
                          <p>نام مسافر</p>
                          <p>نام مسافر به لاتین</p>
                          <p>تاریخ تولد</p>
                          <p>کدملی/شماره گذرنامه</p>
                        </div>
                        <div className="flex text-black gap-11">
                          <p> سید علی مطهری</p>
                          <p>ali motahari</p>
                          <p>1375/04/25</p>
                          <p>123456789987</p>
                        </div>
                      </div>
                      <div onClick={toggleDetails} className="flex justify-end">
                        <Buttons className={'border-none'}>
                          بستن
                          <img src={arrowdown} alt="" />
                        </Buttons>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-9 gap-8">
              <Buttons variant="fill" onClick={downloadPDF} loading={loading}>
                دانلود بیلیط
              </Buttons>
              <Link to={'/'}>
                <Buttons>
                  <img src={backHome.src} alt="" />
                  بازگشت به صفحه اصلی
                </Buttons>
              </Link>
            </div>
          </div>
        ) : (
          <div className="npayment">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center">
                <div className="w-3/4 bg-red-10 h-7 flex justify-center items-center py-8 gap-4 text-red-20 rounded-lg">
                  <img src={noPayment.src} alt="" className="animate-pulse" />
                  پرداخت شما با موفقیت به خطا خورد.
                </div>
              </div>
              <div className="outline p-5 outline-gray-400 rounded-lg mt-7  ">
                <div className="flex justify-between">
                  <h3 className="flex gap-4">
                    <img src={airplane} alt="" />
                    پرواز استانبول به دبی
                  </h3>
                  <div className=" text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                    مجموع پرداختی شما34,410,462 تومان
                  </div>
                </div>
                <div className="flex items-center mt-7 justify-between">
                  <div className="flex gap-7 items-center">
                    <ul className="text-gray-600 flex">
                      شماره رزرو:<p className="text-black">123456</p>
                    </ul>
                    <ul className="text-gray-600 flex">
                      تاریخ رزرو:<p className="text-black">1402/02/18</p>
                    </ul>
                    <ul className="text-gray-600 flex">
                      تاریخ پرواز:<p className="text-black">1402/06/25</p>
                    </ul>
                    <ul className="text-gray-600 flex">
                      مبلغ کل سفارش:
                      <p className="text-black">11٬470٬154تومان</p>
                    </ul>
                  </div>
                  {showDetails ? (
                    <div></div>
                  ) : (
                    <div onClick={toggleDetails}>
                      <Buttons className={'border-none'}>
                        جزئیات سفر
                        <img src={arrowdown} alt="" />
                      </Buttons>
                    </div>
                  )}
                </div>
                {showDetails ? (
                  <div className="download">
                    <div className="flex flex-col">
                      <div className="flex mt-9">
                        <div className="pb-5 gap-6 w-[575px] flex items-center ">
                          <img src={omanAir.src} />
                          <div>
                            <div className="pl-8 gap-2 flex flex-col items-center">
                              <p>02:50</p>
                              <p className="text-gray-600">(SAW)</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="gap-6 flex flex-col">
                              <div className="gap-[2px] flex items-center justify-center">
                                <img src={iconetimer.src} />
                                <p className="text-gray-500 ">19:00</p>
                              </div>
                              <div className="relative flex items-center justify-center ">
                                <img className="z-20" src={iconeairplan} />
                                <span className="absolute w-[142px] h-[1px] fill-none z-10">
                                  <img src={line.src} />
                                </span>
                              </div>
                              <div className="gap-[2px] flex items-center justify-center">
                                <img src={iconbag.src} />
                                <p className="text-gray-500">20Kg</p>
                              </div>
                            </div>
                          </div>

                          <div className="pr-8 gap-2 flex flex-col items-center">
                            <p>21:50</p>
                            <p className="text-gray-600">(DXB)</p>
                          </div>
                        </div>
                        <div className="flex gap-10">
                          <ul className="flex flex-col">
                            شماره پرواز <p>165</p>
                          </ul>
                          <ul className="flex flex-col">
                            کلاس پرواز <p>کوانومی</p>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 mt-8 ">
                        <div className="flex text-gray-600 gap-11">
                          <p>نام مسافر</p>
                          <p>نام مسافر به لاتین</p>
                          <p>تاریخ تولد</p>
                          <p>کدملی/شماره گذرنامه</p>
                        </div>
                        <div className="flex text-black gap-11">
                          <p> سید علی مطهری</p>
                          <p>ali motahari</p>
                          <p>1375/04/25</p>
                          <p>123456789987</p>
                        </div>
                      </div>
                      <div onClick={toggleDetails} className="flex justify-end">
                        <Buttons className={'border-none'}>
                          بستن
                          <img src={arrowUp.src} alt="" />
                        </Buttons>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="flex justify-center">
            <div className="w-2/3 bg-yellow-50 text-yellow-700 flex flex-col justify-center items-center py-10 rounded-lg mt-10 ">
              <div className="">
                پرداخت شما ناموفق بود، اگر هزینه بلیط از حسابتان کسر شده ظرف مدت
                72 ساعت به حساب شما برمی گردد
              </div>
              <div className="mt-9">شماره پیگیری تراکنش: 123456789123</div>
            </div>
            </div>
            <div className="flex justify-center mt-9 gap-8">
              <Link to={'/form/confirm-buy'}>
                <Buttons variant="fill" size="xxls">
                  <img src={wallet.src} alt="" />
                  پرداخت مجدد
                </Buttons>
              </Link>
            </div>
          </div>
        )}
        <Buttons onClick={hanldTest} variant="fill">
          <img src={wallet.src} alt="" />
        </Buttons>
      </div>
    </div>
  )
}
