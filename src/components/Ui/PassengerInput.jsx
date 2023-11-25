import React, {useEffect, useMemo, useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiCheckboxMinus, BiSolidUserMinus, BiSolidUserPlus} from "react-icons/bi";

function PassengerInput({onChange, value, label}) {
    const [isOpen, setIsOpen] = useState(false)
    const [adultCount, setAdultCount] = useState(1)
    const [kidCount, setKidCount] = useState(0)
    const [error, setError] = useState(null)

    const toggleDropdown = () => {
        setIsOpen((s) => !s)
    }
    const handleMinusAdult = () => {
        if (adultCount > 1) setAdultCount(adultCount - 1)
        if (adultCount === 1) {
            setError('کمتر از یکی نمیشه!!')
        } else {
            setError(null)
        }
    }
    const handlePlusAdult = () => {
        if (adultCount < 9) setAdultCount(adultCount + 1)
        if (adultCount === 9) {
            setError('بیشترین حالتو انتخاب کردی!')
        } else {
            setError(null)
        }
    }
    const handleMinusKid = () => {
        if (kidCount > 0) setKidCount(kidCount - 1)
        if (kidCount === 0) {
            setError('کمتر از صفر که نداریم!!')
        } else {
            setError(null)
        }
    }
    const handlePlusKid = () => {
        if (kidCount < 9) setKidCount(kidCount + 1)
        if (kidCount === 9) {
            setError('بیشترین حالتو انتخاب کردی!')
        } else {
            setError(null)
        }
    }

    useEffect(() => {
        onChange(kidCount + adultCount)
    }, [kidCount, adultCount]);


    return (<div className="relative border border-gray-500 px-4 lg:px-4 rounded-lg">
        {label && <label className='absolute -top-2 right-4 text-sm bg-white px-2 text-gray-600'>{label}</label>}
        <div
            onClick={toggleDropdown}
            className="flex items-center justify-between py-3"
        >
            <input
                type={'text'}
                readOnly
                onChange={onChange}
                className="w-1/2 focus:outline-none caret-transparent"
                value={adultCount + kidCount}
            />
            <IoIosArrowDown/>
        </div>
        {isOpen && (<div
            className="flex flex-col flex-wrap w-full bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
            <div className={'flex justify-between items-center gap-6 py-1 px-4 rounded-xl'}>
                <span className='font-bold text-sm text-blue-500 '>بزرگسال</span>
                <div className={'flex justify-between w-full items-center bg-blue-65 text-blue-500 rounded px-1'}>
                <span>
                    <BiSolidUserMinus onClick={handleMinusAdult}
                                      className={'cursor-pointer text-xl transition hover:scale-125' +
                                          ' w-full h-full hover:text-red-600 rounded-[50%] p-1'}/>
                </span>
                    <span className={'text-xl '}>{adultCount}</span>
                    <span>
                    <BiSolidUserPlus onClick={handlePlusAdult}
                                     className={'cursor-pointer text-xl transition hover:scale-125 w-full' +
                                         ' h-full hover:text-green-600 rounded-[50%] p-1'}/>
                </span>
                </div>
            </div>
            <div className={'flex justify-between items-center py-1 gap-8 px-4 rounded-xl'}>
                <span className='font-bold text-sm text-yellow-300'>کودکان</span>
                <div className={'flex justify-between items-center w-full bg-yellow-100 text-yellow-500 px-1'}>
                <span>

                    <BiSolidUserMinus onClick={handleMinusKid}
                                      className={'cursor-pointer text-xl transition hover:scale-125 w-full' +
                                          ' h-full hover:text-red-600 rounded-[50%] p-1'}/>
                </span>
                    <span className={'text-xl'}>{kidCount}</span>
                    <span>
                    <BiSolidUserPlus onClick={handlePlusKid}
                                     className={'cursor-pointer text-xl transition hover:scale-125 w-full ' +
                                         'h-full hover:text-green-600 rounded-[50%] p-1'}/>
                </span>
                </div>

            </div>
            <span
                className={`bg-red-300 font-bold text-sm text-red-600 hidden
                 rounded px-2 py-2 ${error ? '!block' : ''}`}>{error}</span>
        </div>)}
    </div>)
}

export default PassengerInput;