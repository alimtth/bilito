import React from 'react'
import HorizontalLinearStepper from '@/components/Stepper/LinearStepper'
import HeaderTabs from '@/components/NavBar/HeaderTabs'
import InputTextField from '@/components/Ui/InputTextField'

function FormListe() {
  return (
    <div id='container'>
      <HeaderTabs />
      <hr/>
      <HorizontalLinearStepper />



      <div className='px-2 py-[10px] w-full flex justify-between border border-gray-100 rounded-lg '>
        <p>مشخصات مسافران</p>
        <div className='flex gap-2' >
          <p>زمان باقی مانده:</p>
          <p className='text-orange-600'>07:23</p>
        </div>
      </div>


      <p className='mt-10'>بزرگسال</p>
      <div className="p-6 px-0 w-full gap-3 flex flex-col lg:flex lg:flex-row ">
        <InputTextField size={"xsl"} >
          نام لاتین
        </InputTextField>
        <InputTextField size={"xsl"} >
          نام خانوادگی
        </InputTextField>
        <InputTextField size={"xsl"} >
          جنسیت
        </InputTextField>
      </div>


      <div className="p-6 px-0 w-full gap-3  flex flex-col lg:flex lg:flex-row">
        <InputTextField size={"xsl"} >
          ملیت
        </InputTextField>
        <InputTextField size={"xsl"} >
          کد ملی
        </InputTextField>
        <InputTextField size={"xsl"} >
          شماره یا پاسپورت
        </InputTextField>
      </div>
      <hr/>

      
      <p className='mt-10'>کودک</p>
      <div className="p-6 px-0 w-full gap-3 flex flex-col lg:flex lg:flex-row ">
        <InputTextField size={"xsl"} >
          نام لاتین
        </InputTextField>
        <InputTextField size={"xsl"} >
          نام خانوادگی
        </InputTextField>
        <InputTextField size={"xsl"} >
          جنسیت
        </InputTextField>
      </div>

    </div>
  )
}

export default FormListe