// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import InputTextField from '@/components/Ui/InputTextField.jsx'
import {IoIosArrowDown} from 'react-icons/io'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

let birthYears = []
for (let i = 1300; i < 1403; i++) {
  let year = {
    title: i,
  }
  birthYears.push(year)
}

let expireYears = []
for (let i = 1402; i < 1421; i++) {
  let expireYear = {
    title: i,
  }
  expireYears.push(expireYear)
}

const months = [
  {title: 'فروردین', value: '01'},
  {title: 'اردیبهشت', value: '02'},
  {title: 'خرداد', value: '03'},
  {title: 'تیر', value: '04'},
  {title: 'مرداد', value: '05'},
  {title: 'شهریور', value: '06'},
  {title: 'مهر', value: '07'},
  {title: 'آبان', value: '08'},
  {title: 'آذر', value: '09'},
  {title: 'دی', value: '10'},
  {title: 'بهمن', value: '11'},
  {title: 'اسفند', value: '12'},
]
// eslint-disable-next-line no-unused-vars
const monthTest = [{title: 'mmd', id: 1}]

// eslint-disable-next-line react/prop-types
const schema = yup.object().shape({
  firstName: yup.string().required('نام لاتین را وارد کنید'),
  lastName: yup.string().required('نام  خانوادگی را وارد کنید'),
})
// eslint-disable-next-line react/prop-types
function FormListInputs({isAdult, passenger, onUpdate}) {
  const {
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})
  const [adult, setAdult] = useState(true)
  const [dayDropdown, setDayDropdown] = useState(false)
  const [monthDropdown, setMonthDropdown] = useState(false)
  const [yearDropdown, setYearDropdown] = useState(false)
  const [selectedDay] = useState(null)
  const [dayBirthValue, setDayValue] = useState('روز')
  const [monthValue, setMonthValue] = useState('ماه')
  const [yearValue, setYearValue] = useState('سال')
  const [expireDayDropdown, setExpireDayDropdown] = useState(false)
  const [expireMonthDropdown, setExpireMonthDropdown] = useState(false)
  const [expireYearDropdown, setExpireYearDropdown] = useState(false)
  const [expireDayValue, setExpireDayValue] = useState('روز')
  const [expireMonthValue, setExpireMonthValue] = useState('ماه')
  const [expireYearValue, setExpireYearValue] = useState('سال')
  const [setFormData] = useState({})

  const onFormSubmit = (data) => {
    setFormData(data)
  }
  useEffect(() => {
    if (isAdult) {
      setAdult(true)
    } else {
      setAdult(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // }
  const handleDay = (e) => {
    setDayValue(e.target.value)
    setDayDropdown(!dayDropdown)
  }
  const handleMonth = (e) => {
    setMonthValue(e.target.value)
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    setMonthDropdown(!monthDropdown)
  }
  const handleYear = (e) => {
    setYearValue(e.target.value)
    setYearDropdown(!yearDropdown)
  }
  const handleExpireDay = (e) => {
    setExpireDayValue(e.target.value)
    setExpireDayDropdown(!expireDayDropdown)
  }
  const handleExpireMonth = (e) => {
    setExpireMonthValue(e.target.value)
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    setExpireMonthDropdown(!expireMonthDropdown)
  }
  const handleExpireYear = (e) => {
    setExpireYearValue(e.target.value)
    setExpireYearDropdown(!expireYearDropdown)
  }

  const toggleDropdownDay = () => {
    setDayDropdown(!dayDropdown)
  }
  const toggleDropdownMonth = () => {
    setMonthDropdown(!monthDropdown)
  }
  const toggleDropdownYear = () => {
    setYearDropdown(!yearDropdown)
  }
  const toggleDropdownExpireDay = () => {
    setExpireDayDropdown(!expireDayDropdown)
  }
  const toggleDropdownExpireMonth = () => {
    setExpireMonthDropdown(!expireMonthDropdown)
  }
  const toggleDropdownExpireYear = () => {
    setExpireYearDropdown(!expireYearDropdown)
  }

  const handleChange = (e) => {
    onUpdate({
      ...passenger,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <div className="flex mt-10">
        <span className="basis-[60%]">{adult ? 'بزرگسال' : 'کودک'}</span>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="px-0 w-full gap-3 flex flex-col lg:flex lg:flex-row items-end">
          <InputTextField
            name="latin_name"
            size={'sll'}
            type="text"
            value={passenger.latin_name || ''}
            onChange={handleChange}
          >
            نام لاتین
          </InputTextField>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
          <InputTextField
            size={'sll'}
            name="latin_last_name"
            type="text"
            value={passenger.latin_last_name || ''}
            onChange={handleChange}
          >
            نام خانوادگی
          </InputTextField>
          <InputTextField size={'sll'}>جنسیت</InputTextField>
          <div className="flex flex-col rounded-lg gap-2">
            <div>تاریخ تولد (شمسی)</div>
            <div className={'flex'}>
              <div className="relative border border-gray-500 w-40 px-4 rounded-r-lg">
                <div
                  className="flex items-center justify-between py-4"
                  onClick={toggleDropdownDay}
                >
                  <input
                    readOnly
                    type={'text'}
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={dayBirthValue}
                  />

                  <IoIosArrowDown />
                </div>
                {dayDropdown && (
                  <div className="flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll scroll-bar">
                      {[...Array(31)].map((_, index) => (
                        <li
                          key={index + 1}
                          value={index + 1}
                          onClick={handleDay}
                          className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md ${
                            selectedDay
                              ? index === 'bg-blue-500 text-white'
                              : ''
                          }`}
                        >
                          {index + 1}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative border border-gray-500 w-40 px-4">
                <div
                  onClick={toggleDropdownMonth}
                  className="flex items-center justify-between py-4"
                >
                  <input
                    readOnly
                    type={'text'}
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={monthValue}
                  />
                  <IoIosArrowDown />
                </div>
                {monthDropdown && (
                  <div className="flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll  scroll-bar">
                      {months.map((items) => (
                        <li
                          key={items.id}
                          value={items.value}
                          onClick={handleMonth}
                          className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md `}
                        >
                          {items.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative border border-gray-500 w-40 px-4 rounded-l-lg">
                <div
                  onClick={toggleDropdownYear}
                  className="flex items-center justify-between py-4"
                >
                  <input
                    readOnly
                    type={'text'}
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={yearValue}
                  />
                  <IoIosArrowDown />
                </div>
                {yearDropdown && (
                  <div className="flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll  scroll-bar">
                      {birthYears.map((items, index) => (
                        <li
                          key={index + 1}
                          value={items.title}
                          onClick={handleYear}
                          className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md ${
                            selectedDay
                              ? index === 'bg-blue-500 text-white'
                              : ''
                          }`}
                        >
                          {items.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 px-0 w-full gap-3 flex flex-col lg:flex lg:flex-row items-end">
          <InputTextField size={'sll'}>ملیت</InputTextField>
          <InputTextField size={'sll'}>کد ملی</InputTextField>
          <InputTextField size={'sll'}>شماره پاسپورت</InputTextField>
          <div className="flex flex-col rounded-lg gap-2">
            <div>تاریخ انقضا پاسپورت (شمسی)</div>
            <div className={'flex'}>
              <div className="relative border border-gray-500 w-40 px-4 rounded-r-lg">
                <div
                  className="flex items-center justify-between py-4"
                  onClick={toggleDropdownExpireDay}
                >
                  <input
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={expireDayValue}
                  />

                  <IoIosArrowDown />
                </div>
                {expireDayDropdown && (
                  <div className="flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll scroll-bar">
                      {[...Array(31)].map((_, index) => (
                        <li
                          key={index + 1}
                          value={index + 1}
                          onClick={handleExpireDay}
                          className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md ${
                            selectedDay
                              ? index === 'bg-blue-500 text-white'
                              : ''
                          }`}
                        >
                          {index + 1}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative border border-gray-500 w-40 px-4">
                <div
                  onClick={toggleDropdownExpireMonth}
                  className="flex items-center justify-between py-4"
                >
                  <input
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={expireMonthValue}
                  />
                  <IoIosArrowDown />
                </div>
                {expireMonthDropdown && (
                  <div className="flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll  scroll-bar">
                      {months.map((items) => (
                        <li
                          key={items.id}
                          value={items.value}
                          onClick={handleExpireMonth}
                          className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md `}
                        >
                          {items.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative border border-gray-500 w-40 px-4 rounded-l-lg">
                <div
                  onClick={toggleDropdownExpireYear}
                  className="flex items-center justify-between py-4"
                >
                  <input
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={expireYearValue}
                  />
                  <IoIosArrowDown />
                </div>
                {expireYearDropdown && (
                  <div className="flex flex-wrap w-40 bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll  scroll-bar">
                      {expireYears.map((items, index) => (
                        <li
                          key={index + 1}
                          value={items.title}
                          onClick={handleExpireYear}
                          className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md ${
                            selectedDay
                              ? index === 'bg-blue-500 text-white'
                              : ''
                          }`}
                        >
                          {items.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-14"></div>
        <div className="line w-full" />
      </form>
    </>
  )
}

export default FormListInputs
  