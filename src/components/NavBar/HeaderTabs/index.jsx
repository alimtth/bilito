// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import {RiMenu3Line} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {BsAirplane, BsTelephone} from 'react-icons/bs'
import {TbUserSearch} from 'react-icons/tb'
import {BiUser, BiExit} from 'react-icons/bi'
import {Close} from '@mui/icons-material'
import {useAuthContext} from '@/providers/AuthProvider'
import Button from '@/components/Ui/Button'
import bilitoIcon from '@/assets/Images/Icons/BilitoIcone.png'
import arrowDown from '@/assets/Images/Icons/arrow-down.svg'
import userIconLog from '@/assets/Images/Icons/UserIconLog.svg'
import CallIcon from '@/assets/Images/Icons/CallIcon.svg'
import styles from '../style.module.css'
import Link from 'next/link'
function HeaderTabs() {
  const [showMenu, setShowMenu] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const [hover, setHover] = useState(false)

  const handleToggle = () => {
    setShowMenu(!showMenu)
  }

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsHeaderSticky(true)
    } else {
      setIsHeaderSticky(false)
    }
  }
  //commit own in res ad req bla bla
  const handlHoverd = () => {
    setHover(!hover)
  }

  const {isLoggedIn, logout, currentUser, isLoading} = useAuthContext()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className={`${isHeaderSticky ? 'bg-gray-100' : ''}`}>
        <div
          className={` flex justify-between  items-center py-4 flex-row-reverse  lg:flex-row z-50 bg-white rounded-lg  bg-opacity-100 ${
            isHeaderSticky
              ? 'fixed top-6 w-full left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-linear shadow-2xl'
              : ''
          }`}
          id="container"
        >
          <div className="flex justify-between flex-row-reverse lg:flex-row gap-16">
            <img src={bilitoIcon.src} />
            <div className="flex justify-between gap-16">
              <ul className="lg:flex justify-between items-center gap-8 text-sm hidden">
                <Link href='/'>
                  <li className="cursor-pointer hover:text-blue-500 hover:rotate-2 hover:animate-pulse">
                    صفحه اصلی
                  </li>
                </Link>
                <Link href='/account/my-travels'>
                  <li className="cursor-pointer hover:text-blue-500 hover:rotate-2 hover:animate-pulse">
                    سفرهای من
                  </li>
                </Link>
                <li className={styles.dropdown + "cursor-pointer"}>
                  <button className={styles.dropButton}>سایر موارد</button>
                  <img src={arrowDown.src} className="" />
                  <div className={styles.dropdown_content}>
                    <Link href='/insurance'>بیمه مسافرتی</Link>
                    <Link href='/about'> درباره ما</Link>
                    <Link href='/about '> تماس با ما</Link>
                  </div>
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
              cursor: 'pointer',
            }}
            onClick={handleToggle}
            className="lg:hidden block"
          />

          <div
            className={ styles.sidebar + `shadow-2xl border rounded p-5 ${ showMenu ? styles.open : ''}`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end gap-32">
                <img className="w-14 h-auto" src={bilitoIcon.src} />
                <Close
                  style={{
                    cursor: 'pointer',
                    fontSize: '35px',
                    border: '1px solid #ADADAD',
                    borderRadius: '10px',
                    padding: '5px',
                  }}
                  onClick={handleToggle}
                >
                  close
                </Close>
              </div>
              <div className={ styles.line }></div>
              <div className="flex flex-col py-12">
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  <AiOutlineHome />
                  صفحه اصلی
                </div>
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  <BsAirplane />
                  سفرهای من
                </div>
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  <BsTelephone />
                  تماس با ما
                </div>
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  <TbUserSearch />
                  درباره ما
                </div>
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  <BiUser />
                  <Link href='account'>حساب کاربری</Link>
                </div>
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  4045_021 پشتیبانی
                  <BsTelephone />
                </div>
                <div className="flex justify-center gap-3 py-4 text-gray-20 font-light">
                  <Link href='/login'>
                    <Button variant="fill" onClick={handleToggle}>
                      <img src={userIconLog.src} />
                      <div> ورود/ ثبت نام</div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* edit in side efect */}
          <div className="lg:flex justify-between gap-8 hidden">
            <div className="inline-flex items-center gap-2 opacity-80">
              <p className="">4045_021</p>
              <p>پشتیبانی</p>
              <img src={CallIcon.src} />
            </div>
            {isLoggedIn ? (
              <div className="flex justify-center items-center gap-4">
                {isLoading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-650 h-10 w-10"></div>
                  </div>
                ) : (
                  <div>
                    <img
                      src={currentUser?.avatar.src}
                      className="w-10 h-10 rounded-full z-50"
                      onClick={handlHoverd}
                    />
                    {hover && (
                      <div
                        className={
                          'p-[20px] bg-white  -mr-10 rounded-lg flex flex-col items-center justify-center absolute top-[25px] gap-[20px] w-100 z-30 shadow-lg mt-7'
                        }
                      >
                        <Link href='/account/data-user'>
                          <div className="nested-item text-[13px] text-[#080808BF] opacity-75">
                            حساب کاربری
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                <BiExit
                  className="w-9 h-9 cursor-pointer	"
                  onClick={() => logout()}
                />
              </div>
            ) : (
              <Link href='/login'>
                <Button variant="fill">
                  <img src={userIconLog.src} />
                  <div> ورود/ ثبت نام</div>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTabs
