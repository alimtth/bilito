import React from 'react';
import BilitoIcon from '../../assets/Images/Icons/BilitoIcone.png'
import ContactUsButton from "../Ui/ContactUsButton.jsx";
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
import './style.css'

function Footer(props) {
    return (
        <footer className='mx-auto pt-6 bg-gray-200' >
            <div className='flex md:flex-row flex-col' id='container'>
                <div className='flex flex-col justify-start basis-3/4 text-[#606060] text-xl font-normal'>
                    <div className='md:flex flex-col hidden'>
                        <span className='font-bold text-black leading-7'>اپلیکیشن بیلیتو</span>
                        <span
                            className='mt-2'>با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته باشید.</span>
                    </div>
                    <div className='flex md:flex-col flex-row-reverse'>
                        <img className='w-24 mt-16' src={BilitoIcon} alt='Bilito-Icon'/>
                        <div>
                            <span className='mt-8 md:text-inherit text-sm block'>تلفن پشتیبانی: 98 76 54 32_021</span>
                            <span className='mt-6 text-sm'>آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی.</span>
                        </div>

                    </div>
                </div>
                <div className='flex md:flex-col basis-3/5 flex-row justify-between'>
                    <div className='flex justify-center items-start flex-col md:flex-row gap-[24px] md:order-1 order-2'>
                       <ContactUsButton id='container' icon={PlayStoreIcon}>Play Store</ContactUsButton>
                        <ContactUsButton id='container' icon={AppleIcon}>Apple Store</ContactUsButton>
                    </div>
                    <div className='inline-flex flex-col justify-center gap-[24px] md:my-20 md:order-2 order-1 mt-10' >
                        <div className='text-[#606060] font-bold text-xl leading-7'>
                            لینک‌های مفید بیلیتو
                        </div>
                        <div className='flex flex-col justify-center gap-[8px] self-stretch'>

                            <span className='text-[#606060]'>درباره ما</span>
                            <span className='text-[#606060]'>تماس با ما</span>
                            <span className='text-[#606060]'>استرداد بلیط</span>
                            <span className='text-[#606060]'>راهنمای خرید بلیط</span>
                            <span className='text-[#606060]'>قوانین و مقررات</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:justify-around md:items-center flex flex-col md:flex-row' id='container'>
                <div className='flex gap-[20px] justify-center'>
                    <img src={TelegramIcon} alt="TelegramIcon"/>
                    <img src={LinkedInIcon} alt="LinkedInIcon"/>
                    <img src={YouTubeIcon} alt="YouTubeIcon"/>
                    <img src={InstagramIcon} alt="InstagramIcon"/>
                    <img src={FaceBookIcon} alt="FaceBookIcon"/>
                    <img src={TweeterIcon} alt="TweeterIcon"/>
                </div>
                <div className='flex gap-[20px] md:items-end justify-center pt-3 md:p-0' >
                    <img src={EpIcon} alt={'EpIcon'}/>
                    <img src={CaoIcon} alt={'CaoIcon'}/>
                    <img src={AiraIcon} alt={'AiraIcon'}/>
                    <img src={EnemadIcon} alt={'EnemadIcon'}/>
                    <img src={PassengerIcon} alt={'PassengerIcon'}/>
                </div>
            </div>
            <div className='line' id='container'/>
            <div className='mx-auto text-center mt-4'>
                <div className='flex flex-col gap-[16px] justify-center items-center'>
                    <div>
                        <img src={ArrowUp} alt={'ArrowUp'}/>
                    </div>
                    <div>بازگشت به بالا</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;