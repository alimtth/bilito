// eslint-disable-next-line no-unused-vars
import React, {useEffect, useMemo, useState} from 'react'
import InputTextField from '@/components/Ui/InputTextField.jsx'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

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
// eslint-disable-next-line no-unused-vars
const monthTest = [{title: 'mmd', id: 1}]

// eslint-disable-next-line react/prop-types
const schema = yup.object().shape({
  firstName: yup.string().required('نام لاتین را وارد کنید'),
  lastName: yup.string().required('نام  خانوادگی را وارد کنید'),
})

// eslint-disable-next-line react/prop-types
function FormListInputs({passenger, onUpdate}) {
  const {
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  const [birthDate, setBirthDate] = useState(null)
  const [expirePassport, setExpirePassport] = useState(null)
  const onFormSubmit = (data) => {
    console.log(data)
  }

  const handleChange = (name, value) => {
    onUpdate({
      ...passenger,
      [name]: value,
    })
  }
  return (
    <>
      <div className="flex mt-10">
        <span className="basis-[60%]">بزرگسال</span>
      </div>
      <form className={''} onSubmit={handleSubmit(onFormSubmit)}>
        <div className="px-0 gap-3 flex lg:items-end items-center ">
          <div className="pt-4 gap-3 flex flex-col lg:flex-row items-center basis-3/4">
            <InputTextField
              name="latin_name"
              size={'slx'}
              type="text"
              value={passenger.latin_name || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              نام لاتین
            </InputTextField>
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
            <InputTextField
              size={'slx'}
              name="latin_last_name"
              type="text"
              value={passenger.latin_last_name || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              نام خانوادگی
            </InputTextField>
            <InputTextField
              size={'slx'}
              name="gender"
              type="text"
              value={passenger.gender || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              جنسیت
            </InputTextField>
          </div>
          <div className="flex flex-col rounded-lg gap-2 basis-1/4">
            <div>تاریخ تولد (شمسی)</div>
            <DatePicker
              name="birth_day"
              showOtherDays={true}
              style={{
                padding: '25px 20px',
                borderRadius: '0.5rem',
                borderColor: '#808080',
              }}
              calendar={persian}
              value={birthDate ? new Date(birthDate) : null}
              locale={persian_fa}
              format="D MMMM YYYY"
              onChange={(date) => {
                const _date = new Date(date.toDate())
                setBirthDate(
                  `${_date.getFullYear()}-${
                    _date.getMonth() + 1
                  }-${_date.getDate()}`
                )
                handleChange(
                  'birth_day',
                  `${_date.getFullYear()}-${
                    _date.getMonth() + 1
                  }-${_date.getDate()}`
                )
              }}
            />
          </div>
        </div>
        <div className="my-7 pt-4 px-0 w-full gap-3 flex items-end ">
          <div className="gap-3 flex flex-col lg:flex-row items-center basis-3/4">
            <InputTextField
              size={'slx'}
              name="nationality"
              type="text"
              value={passenger.nationality || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              ملیت
            </InputTextField>
            <InputTextField
              size={'slx'}
              name="national_code"
              type="text"
              value={passenger.national_code || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              کد ملی
            </InputTextField>
            <InputTextField
              size={'slx'}
              name="passport_number"
              type="text"
              value={passenger.passport_number || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              شماره پاسپورت
            </InputTextField>
          </div>
          <div className=" rounded-lg gap-2 basis-1/4  flex flex-col justify-end flex-wrap lg:fle lg:items-start">
            <div>تاریخ انقضا پاسپورت (شمسی)</div>
            <DatePicker
              name="expire_date_passport"
              showOtherDays={true}
              style={{
                padding: '24px 20px',
                borderRadius: '0.5rem',
                borderColor: '#808080',
              }}
              calendar={persian}
              value={expirePassport ? new Date(expirePassport) : null}
              locale={persian_fa}
              format="D MMMM YYYY"
              onChange={(date) => {
                const _date = new Date(date.toDate())
                setExpirePassport(
                  `${_date.getFullYear()}-${
                    _date.getMonth() + 1
                  }-${_date.getDate()}`
                )
                handleChange(
                  'expire_date_passport',
                  `${_date.getFullYear()}-${
                    _date.getMonth() + 1
                  }-${_date.getDate()}`
                )
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center pb-14"></div>
        <div className="line w-full" />
      </form>
    </>
  )
}

export default FormListInputs
