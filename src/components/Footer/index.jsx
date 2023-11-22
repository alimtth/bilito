// eslint-disable-next-line no-unused-vars
import React from 'react'
import BilitoIcon from '../../assets/Images/Icons/BilitoIcone.png'
import ContactUsButton from '../Ui/ContactUsButton.jsx'
import AppleIcon from '../../assets/Images/Icons/AppleIcon.png'
import PlayStoreIcon from '../../assets/Images/Icons/PlayStoreIcon.png'
import AiraIcon from '../../assets/Images/Icons/AiraIcon.png'
import CaoIcon from '../../assets/Images/Icons/CaoIcon.png'
import EpIcon from '../../assets/Images/Icons/EpIcon.png'
import EnemadIcon from '../../assets/Images/Icons/EnemadIcon.png'
import PassengerIcon from '../../assets/Images/Icons/PassengeIcon.png'
import TelegramIcon from '../../assets/Images/Icons/TelegramIcon.png'
import InstagramIcon from '../../assets/Images/Icons/InstagramIcon.png'
import FaceBookIcon from '../../assets/Images/Icons/FaceBookIcon.png'
import TweeterIcon from '../../assets/Images/Icons/TweeterIcon.png'
import LinkedInIcon from '../../assets/Images/Icons/LinkedInIcon.png'
import YouTubeIcon from '../../assets/Images/Icons/YouTubeIcon.png'
import ArrowUp from '../../assets/Images/arrow-circle-up.png'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="mx-auto pt-8 bg-gray-200">

            <div className="flex lg:flex-row flex-col" id="container">
                <div className="flex flex-col justify-start basis-3/4 text-gray-500 text-xl font-normal">
                    <div className="lg:flex flex-col hidden">
            <span className="font-bold text-black leading-7">
              اپلیکیشن بیلیتو
            </span>
                        <span className="mt-2 text-gray-500">
              با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته
              باشید.
            </span>
                        </div>
                        <div className="flex lg:flex-col flex-row-reverse">
                            <img className="w-24 mt-16" src={BilitoIcon.src} alt="Bilito-Icon"/>
                            <div>
              <span className="mt-8 lg:text-gray-500 text-sm block">
                تلفن پشتیبانی: 98 76 54 32_021
              </span>
                            <span className="mt-6 text-gray-500 text-sm">
                آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون،
                طوس غربی.
              </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-col basis-3/5 flex-row justify-between">
                        <div
                            className="flex justify-center items-start flex-col lg:flex-row gap-[24px] lg:order-1 order-2">
                            <ContactUsButton id="container" icon={PlayStoreIcon}>
                                Play Store
                            </ContactUsButton>
                            <ContactUsButton id="container" icon={AppleIcon}>
                                Apple Store
                            </ContactUsButton>
                        </div>
                        <div
                            className="inline-flex flex-col justify-center gap-[24px] lg:my-20 lg:order-2 order-1 mt-10">
                            <div className="text-gray-500 font-bold text-xl leading-7">
                                لینک‌های مفید بیلیتو
                                <div className={'line w-full lg:w-2/6'}></div>
                            </div>
                            <div className="flex flex-col justify-center gap-[8px] self-stretch">
                                <Link to={'about'}>
                                    <span className="text-gray-500">درباره ما</span>
                                </Link>
                                <Link to={'about'}>
                                    <span className="text-gray-500">تماس با ما</span>
                                </Link>
                                <span className="text-gray-500">استرداد بلیط</span>
                                <Link to={'/stepshop'}>
                                    <span className="text-gray-500">راهنمای خرید بلیط</span>
                                </Link>
                                <span className="text-gray-500">قوانین و مقررات</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:justify-around lg:items-center flex flex-col lg:flex-row " id="container">
                    <div className="flex gap-[20px] justify-center">
                        <img src={TelegramIcon} alt="TelegramIcon"/>
                        <img src={LinkedInIcon} alt="LinkedInIcon"/>
                        <img src={YouTubeIcon} alt="YouTubeIcon"/>
                        <img src={InstagramIcon} alt="InstagramIcon"/>
                        <img src={FaceBookIcon} alt="FaceBookIcon"/>
                        <img src={TweeterIcon} alt="TweeterIcon"/>
                    </div>
                    <div className="flex gap-[20px] lg:items-end justify-center pt-3 lg:p-0">
                        <img src={EpIcon} alt={'EpIcon'}/>
                        <img src={CaoIcon} alt={'CaoIcon'}/>
                        <img src={AiraIcon} alt={'AiraIcon'}/>
                        <img src={EnemadIcon} alt={'EnemadIcon'}/>
                        <img src={PassengerIcon} alt={'PassengerIcon'}/>
                    </div>
                </div>
                <div className="line" id="container"/>
                <div className="mx-auto text-center mt-4">
                    <div className="flex flex-col gap-[16px] justify-center items-center">
                        <div>
                            <img src={ArrowUp} alt={'ArrowUp'}/>
                        </div>
                        <div className={'text-gray-500'}>بازگشت به بالا</div>
                    </div>
                </div>


        </footer>
   )
}

export default Footer
