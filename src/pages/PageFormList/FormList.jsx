import {useEffect, useState} from 'react'
import HeaderTabs from '@/components/NavBar/HeaderTabs'
import InputTextField from '@/components/Ui/InputTextField'
import iconTimer from '@/assets/Images/Icons/timer.svg'
import iconAirPlan from '@/assets/Images/Icons/airplaneblue.svg'
import iconBag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
import Buttons from '@/components/Ui/Button'
import {IoIosArrowDown} from 'react-icons/io'
import FormListInputs from "@/components/Ui/FormListInputs/index.jsx";
import { BilitForm } from '@/components/BilitForm/BilitForm'

// eslint-disable-next-line react/prop-types
function FormList({forth, back, imagess}) {
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
        <div id="container">
            <HeaderTabs/>
            <hr/>
            <div className="my-8 border border-gray-100 rounded-lg hidden-mobile">
                <BilitForm />
                <div></div>

                <div className="p-8 flex items-start justify-between">
                    <div className="flex justify-center items-center gap-[8px]">
                        <div
                            className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-8 border rounded-md">
                            اکونومی
                        </div>
                        <div
                            className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-8 border rounded-md">
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
                    <p className="font-bold">مشخصات مسافران</p>
                    <div className="flex gap-2">
                        <p>زمان باقی مانده:</p>
                        <p className="text-orange-600">
                            {' '}
                            {minutes}:{seconds}
                        </p>
                    </div>
                </div>
                <hr className="w-full bg-gray-400 h-0.5 mt-3 mb-5"/>

                <FormListInputs isAdult={true}/>
                <FormListInputs isAdult={false}/>
                <FormListInputs isAdult={false}/>
            </div>
            <div className='outline p-5 outline-gray-400 rounded-lg mt-7 mb-9 flex flex-col gap-4'>
                <span className='text-xl font-bold'>اطلاعات تماس</span>
                <p className='text-sm text-gray-500 font-light'>در صورت مغایرت اطلاعات تماس این فرم با اطلاعات درج شده
                    در حساب کاربری، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال خواهد شد. همچنین «اعلام تغییرات
                    بلیط» یا «دریافت تاییدیه» از یکی از کانال‌های «اطلاعات تماس حساب کاربری» یا «اطلاعات همین فرم» صورت
                    خواهد گرفت و بیلیتو متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم هر دو کانال را در
                    دسترس نگه دارید.</p>
                <div className='flex lg:flex-row justify-center items-start gap-6'>
                    <InputTextField size={'ssl'}>ایمیل</InputTextField>
                    <InputTextField size={'ssl'}>شماره موبایل</InputTextField>
                </div>
            </div>
            <div className='flex justify-center items-center pb-14'>
                <Buttons className={'w-1/4 justify-center'} size={'xl'}>ادامه</Buttons>
            </div>
        </div>
    )
}

export default FormList
