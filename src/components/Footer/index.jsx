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
        <footer className='mx-auto pt-6 bg-gray-200'>
            <div className='flex'  id='container'>
                <div className='flex flex-col justify-start basis-3/4 text-[#606060] text-xl font-normal'>
                    <div className='flex flex-col'>
                        <span className='font-bold text-black leading-7'>اپلیکیشن بیلیتو</span>
                        <span
                            className='mt-2'>با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته باشید.</span>
                    </div>
                    <div className='flex flex-col gap-'>
                        <img className='w-36 mt-16' src={BilitoIcon} alt='Bilito-Icon'/>
                        <span className='mt-8 text-inherit'>تلفن پشتیبانی: 98 76 54 32_021</span>
                        <span className='mt-6'>آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی.</span>
                    </div>
                </div>
                <div className='flex flex-col basis-1/4'>
                    <div className='flex justify-center items-start gap-[24px]'>
                        <div><ContactUsButton id='container' icon={PlayStoreIcon}>Play Store</ContactUsButton></div>
                        <div><ContactUsButton id='container' icon={AppleIcon}>Apple Store</ContactUsButton></div>
                    </div>
                    <div className='inline-flex flex-col justify-center gap-[24px] my-20'>
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
            <div className='flex justify-around items-center '>
                <div className='flex gap-[20px] justify-center'>
                    <img src={TelegramIcon} alt="TelegramIcon"/>
                    <img src={LinkedInIcon} alt="LinkedInIcon"/>
                    <img src={YouTubeIcon} alt="YouTubeIcon"/>
                    <img src={InstagramIcon} alt="InstagramIcon"/>
                    <img src={FaceBookIcon} alt="FaceBookIcon"/>
                    <img src={TweeterIcon} alt="TweeterIcon"/>
                </div>
                <div className='flex gap-[20px] items-end' >
                    <img src={EpIcon} alt={'EpIcon'}/>
                    <img src={CaoIcon} alt={'CaoIcon'}/>
                    <img src={AiraIcon} alt={'AiraIcon'}/>
                    <img src={EnemadIcon} alt={'EnemadIcon'}/>
                    <img src={PassengerIcon} alt={'PassengerIcon'}/>
                </div>
            </div>
            <hr/>
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