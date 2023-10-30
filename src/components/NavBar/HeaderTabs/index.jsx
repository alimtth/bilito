import React, {useState} from "react";
import bilitoIcon from "@/assets/Images/Icons/BilitoIcone.png";
import userIconLog from "@/assets/Images/Icons/UserIconLog.svg";
import CallIcon from "@/assets/Images/Icons/CallIcon.svg";
import arrowDown from "@/assets/Images/Icons/arrow-down.svg";
import Button from "@/components/Ui/Button";
import "../style.css";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {
    AirplanemodeActive, AirplanemodeActiveOutlined,
    Airplay,
    Close,
    DockOutlined,
    Home,
    HomeMax,
    HomeMini,
    HomeOutlined
} from "@mui/icons-material";
import {BsAirplane, BsTelephone} from "react-icons/bs";
import {PiAirplaneBold, PiAirplaneInFlightLight, PiAirplaneLight} from "react-icons/pi";
import {TbUserSearch} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {AiFillHome, AiOutlineHome} from "react-icons/ai";
import HomePageScreen from "../HomePageScreen";
import {RiMenu3Line} from "react-icons/ri";

function HeaderTabs({onClick}) {
    const [showMenu, setShowMenu] = useState(false)
    const handleToggle = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>

            <div className="flex justify-between items-center py-4 flex-row-reverse lg:flex-row" id='container'>
                <div className="flex justify-between flex-row-reverse lg:flex-row gap-16">
                    <img src={bilitoIcon}/>
                    <div className="flex justify-between gap-16">
                        <ul className="lg:flex justify-between items-center gap-8 text-sm hidden">
                            <Link to={"/"}>
                                <li className="cursor-pointer">صفحه اصلی</li>
                            </Link>
                            <li className="cursor-pointer">سفرهای من</li>
                            <li className="flex justify-between gap-2 cursor-pointer">
                                سایر موارد
                                <img src={arrowDown}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <RiMenu3Line
                    style={{
                        backgroundColor: '#77BDE0',
                        fontSize: '45px',
                        border: '1px solid #1D99CC',
                        color: ' #fff',
                        borderRadius: '5px',
                        padding: '5px',
                        cursor: 'pointer'
                    }} onClick={handleToggle} className='lg:hidden block'/>

                <div className={`sidebar shadow-2xl border rounded p-5 ${showMenu ? 'open' : ''}`}>
                    <div className='flex flex-col h-full'>
                        <div className='flex justify-end gap-32'>
                            <img className='w-14 h-auto' src={bilitoIcon}/>
                            <Close style={{
                                cursor: 'pointer',
                                fontSize: '35px',
                                border: '1px solid #ADADAD',
                                borderRadius: '10px',
                                padding: '5px'
                            }} onClick={handleToggle}>close</Close>
                        </div>
                        <div className='line'></div>
                        <div className='flex flex-col py-12'>
                            <div className='flex justify-start gap-3 py-4 text-gray-20 font-light'>
                                <AiOutlineHome/>
                                صفحه اصلی
                            </div>
                            <div className='flex justify-start gap-3 py-4 text-gray-20 font-light'>
                                <BsAirplane/>
                                سفرهای من
                            </div>
                            <div className='flex justify-start gap-3 py-4 text-gray-20 font-light'>
                                <BsTelephone/>
                                تماس با ما
                            </div>
                            <div className='flex justify-start gap-3 py-4 text-gray-20 font-light'>
                                <TbUserSearch/>
                                درباره ما
                            </div>
                            <div className='flex justify-start gap-3 py-4 text-gray-20 font-light'>
                                <BiUser/>
                                حساب کاربری
                            </div>
                            <div className='flex justify-start gap-3 py-4 text-gray-20 font-light'>
                                4045_021 پشتیبانی
                                <BsTelephone/>
                            </div>
                            <div className='flex justify-center gap-3 py-4 text-gray-20 font-light'>
                                <Link to={"/login"}>
                                    <Button variant="fill" onClick={handleToggle}>
                                        <img src={userIconLog}/>
                                        <div> ورود/ ثبت نام</div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex justify-between gap-8 hidden">
                    <div className="inline-flex items-center gap-2 opacity-80">
                        <p>4045_021</p>
                        <p>پشتیبانی</p>
                        <img src={CallIcon}/>
                    </div>
                    <Link to={"/login"}>
                        <Button variant="fill">
                            <img src={userIconLog}/>
                            <div> ورود/ ثبت نام</div>
                        </Button>

                    </Link>
                </div>
            </div>
            <HomePageScreen/>
        </>
    );
}

export default HeaderTabs;
