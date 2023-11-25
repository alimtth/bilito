// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
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
import waving from '@/assets/gif/waving-hand-people.gif'
import '../style.css'
function HeaderTabs() {
  const [showMenu, setShowMenu] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const handleToggle = () => {
    setShowMenu(!showMenu)
  }

  // const handleScroll = () => {
  //   if (window.scrollY > 600) {
  //     setIsHeaderSticky(true)
  //   } else {
  //     setIsHeaderSticky(false)
  //   }
  // }
  //commit own in res ad req bla bla

  const {isLoggedIn, logout, currentUser, isLoading} = useAuthContext()

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <>
      <div className={`${isHeaderSticky ? 'bg-gray-100' : ''}`}>
        <div
          className={`flex custom-container justify-between items-center py-4 flex-row-reverse lg:flex-row z-50 bg-white rounded-lg bg-opacity-100 ${
            isHeaderSticky
              ? 'fixed top-6 w-full left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-linear shadow-2xl'
              : ''
          }`}
        >
          <div className="flex justify-between flex-row-reverse lg:flex-row gap-16">
            <img src={bilitoIcon} />
            <div className="flex justify-between gap-16">
              <ul className="lg:flex justify-between items-center gap-8 text-sm hidden">
                <Link to={'/'}>
                  <li className="cursor-pointer hover:text-blue-500 hover:rotate-2 hover:animate-pulse">
                    صفحه اصلی
                  </li>
                </Link>
                <Link to={'/account/my-travels'}>
                  <li className="cursor-pointer hover:text-blue-500 hover:rotate-2 hover:animate-pulse">
                    سفرهای من
                  </li>
                </Link>
                <li className="dropdown cursor-pointer">
                  <button className="dropButton">سایر موارد</button>
                  <img src={arrowDown} className="" />
                  <div className="dropdown-content">
                    <Link to={'/insurace'}>بیمه مسافرتی</Link>
                    <Link to={'/about'}> درباره ما</Link>
                    <Link to={'/about '}> تماس با ما</Link>
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
            className={`sidebar shadow-2xl border rounded p-5 ${
              showMenu ? 'open' : ''
            }`}
          >
            <div className="flex flex-col w-[100%]">
              <div className="flex justify-end gap-32">
                <img className="" src={bilitoIcon} />
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
              <div className="line"></div>
              <div className="flex flex-col text-2xl gap-8 px-9 mt-11">
                <Link to={'/'}>
                  <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                    <AiOutlineHome />
                    صفحه اصلی
                  </div>
                </Link>
                <Link to={'/account/my-travels'}>
                  <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                    <BsAirplane />
                    سفرهای من
                  </div>
                </Link>
                <Link to={'/about'}>
                  <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                    <BsTelephone />
                    تماس با ما
                  </div>
                </Link>
                <Link to={'/about'}>
                  <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                    <TbUserSearch />
                    درباره ما
                  </div>
                </Link>
                <Link to={'account'}>
                  <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                    <BiUser />
                    حساب کاربری
                  </div>
                </Link>
                <div className="flex justify-start gap-3 py-4 text-gray-20 font-light">
                  4045_021 پشتیبانی
                  <BsTelephone />
                </div>
                {isLoggedIn ? (
                  <h3 className="text-blue-500 font-bold text-2xl flex justify-center mt-20 gap-5 items-center">
                    سلام&nbsp;({currentUser?.name}) خوش اومدی{' '}
                    <img src={waving} className="w-12" alt="" />
                  </h3>
                ) : (
                  <div className="flex justify-center gap-3 py-4 text-gray-20 font-light">
                    <Link to={'/login'}>
                      <Button
                        variant="fill"
                        onClick={handleToggle}
                        size="xsxls"
                      >
                        <img src={userIconLog} />
                        <div> ورود/ ثبت نام</div>
                      </Button>
                    </Link>
                  </div>
                )}

                {/* ________________________________________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________________________________________ */}
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between gap-8 hidden">
            <div className="inline-flex items-center gap-2 opacity-80">
              <p className="">4045_021</p>
              <p>پشتیبانی</p>
              <img src={CallIcon} />
            </div>
            {isLoggedIn ? (
              <div className="flex justify-center items-center gap-4">
                {isLoading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-650 h-10 w-10"></div>
                  </div>
                ) : (
                  <Link to={'/account/data-user'}>
                    <div className='hover:bg-blue-500 rounded-[100%]'>
                      <img
                        src={
                          currentUser?.image ?? '/src/assets/Images/profile.jpg'
                        }
                        className="w-10 h-10 rounded-full z-10 hover:blur-[0.8px]"
                        onClick={handleHover}
                      />
                    </div>
                  </Link>
                )}
                <BiExit
                  className="w-9 h-9 cursor-pointer	"
                  onClick={() => logout()}
                />
              </div>
            ) : (
              <Link to={'/login'}>
                <Button variant="fill">
                  <img src={userIconLog} />
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
