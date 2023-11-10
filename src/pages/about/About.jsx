// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import PageScreenAbout from '@/assets/Images/about-us.png'
import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
function About() {
  const [select, setSelect] = useState(false)

  const handlSelect = () => {
    setSelect(!select)
  }
  return (
    <div>
      <img src={PageScreenAbout} alt="" className="w-full" />
      <div id="container">
        <div className="flex justify-start gap-6 mt-12">
          <h2 className="text-blue-650">درباره ما</h2>
          <h2 className="text-gray-500" onClick={handlSelect}>
            تماس با ما
          </h2>
        </div>
        {select ? (
          <div className="flex flex-col">
            <p className="flex justify-center">
              ما در مجموعه بیلیتو همواره به نظرات، پیشنهادات و سوالات شما عزیزان
              ارزش قائلیم و مشتاقانه منتظر کمک به شما هستیم.
            </p>
            <div className="flex outline outline-gray-400 justify-between p-7 rounded-xl mt-9">
              <div className="flex flex-col gap-6">
                <h1 className="text-lg">جستجوی بیلیت</h1>
                <hr className="w-[50%] h-1" />
                <p className="text-gray-600">
                  آدرس: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس
                  غربی.{' '}
                </p>
                <p className="text-gray-600">شماره تماس: 32 54 7691 -021</p>
                <p className="text-gray-600">ایمیل: alimotahari565@gmail.com</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.07421920594!2d51.51212112769512!3d35.707740684794935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2sfr!4v1699008065631!5m2!1sfa!2sfr"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-72 h-72 rounded-lg"
              ></iframe>
            </div>
            <h2 className="mt-10 flex justify-center animate-pulse">
              درصورتی که سوالی دارید یا نیاز به راهنمایی دارید، لطفا از فرم زیر
              برای تماس با ما استفاده کنید. تیم پشتیبانی ما در اسرع وقت پاسخگوی
              شما خواهد بود.{' '}
            </h2>
            <div className="flex outline outline-gray-400 justify-between p-7 rounded-xl mt-9 mb-10">
              <div className="flex flex-col gap-6">
                <h1 className="text-lg"> فرم تماس با ما</h1>
                <hr className="w-[50%] h-1" />
                <InputTextField size={'xsl'}>نام و نام خانوادگی</InputTextField>
                <InputTextField size={'xsl'}>ایمیل</InputTextField>
                <InputTextField size={'xsl'}>موضوع</InputTextField>
              </div>
              <div className="">
                <textarea
                  name=""
                  id=""
                  placeholder="پیام"
                  className="border-none outline outline-gray-450 rounded-lg h-[200px] mt-12 w-[380px] text-gray-20 p-3 placeholder-gray-20"
                ></textarea>
                <Buttons
                  variant="fill"
                  className={'w-full flex justify-center'}
                >
                  ارسال پیام
                </Buttons>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mt-9">
              ما در بیلیتو مفتخریم که یکی از پیشروان در صنعت هواپیمایی هستیم و
              خدماتی بی‌نظیر را به مسافران عزیز ارائه می‌دهیم. با تیمی از
              کارشناسان حرفه‌ای در زمینه‌ی هواپیمایی، ما بهترین شرایط و تجربه را
              برای سفرهای شما فراهم می‌کنیم
            </p>
            <h1 className="font-bold text-lg mt-9">اهداف ما</h1>
            <p className="text-gray-600 mt-5">
              هدف اصلی ما در بیلیتو، ارائه‌ی خدماتی با کیفیت و استاندارد در سطح
              بین‌المللی است. با تمرکز بر رضایت مشتریان، ما سعی می‌کنیم تجربه‌ی
              سفر شما را به یک تجربه‌ی لاکچری و ناشناخته تبدیل کنیم. از لحظه‌ی
              رزرو تا رسیدن به مقصد، ما همراه شما خواهیم بود و اطمینان می‌دهیم
              که هر جزئیات سفر شما به بهترین شکل ممکن انجام شود.
            </p>
            <h1 className="font-bold text-lg mt-9">خدمات ما</h1>
            <p className="text-gray-600 mt-5">
              در بیلیتو، ما مجموعه‌ای از خدمات شگفت‌انگیز را برای شما آماده
              کرده‌ایم. از رزرو آنلاین سریع و آسان، تا پروازهای راحت و امکانات
              لوکس در هواپیما، همه‌ی جزئیات سفر شما تحت نظر ماست. همچنین، با تیم
              پشتیبانی ما در دسترس شما هستیم تا در صورت بروز هرگونه مشکل یا
              سوال، به شما کمک کنیم.
            </p>
            <br />
            <h3 className="flex justify-center mt-14 mb-14 animate-pulse">
              با تشکر از انتخاب شما برای سفر با بیلیتو. ما در انتظار خدمت‌رسانی
              به شما هستیم و امیدواریم که تجربه‌ی سفری فوق‌العاده را برای شما
              فراهم کنیم
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default About
