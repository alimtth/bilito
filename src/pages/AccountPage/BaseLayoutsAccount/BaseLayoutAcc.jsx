import HeaderTabs from '@/components/NavBar/HeaderTabs'
import {useAuthContext} from '@/providers/AuthProvider'
import {Link, Outlet} from 'react-router-dom'
import profile from '@/assets/Images/Icons/profile-add.svg'

function BaseLayoutAcc() {
  const {currentUser, logout} = useAuthContext()

  return (
    <>
      <HeaderTabs />
      <div className="flex lg:flex-nowrap custom-container flex-wrap justify-center gap-4  -mt-12">
        <div className=" lg:outline lg:outline-gray-400 lg:rounded-lg mt-28 basis-1/4">
          <div className="flex flex-col gap-1 items-center pt-5">
            <img
              src={currentUser?.image_url ?? '/src/assets/Images/profile.jpg'}
              className="rounded-full w-[50%] h-[75%] lg:w-[20%] lg:h-[50%]"
            />
            <h4 className="mt-4 font-bold text-gray-500">
              {currentUser?.name}
            </h4>
            <p className="text-gray-500">{currentUser?.mobile}</p>
          </div>
          <div className="lg:flex hidden flex-col items-start gap-5 w-full px-4">
            <div className="line w-full" />
            <Link to={'data-user'}>
              <p
                className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
              >
                <img src={profile} alt="" />
                اطلاعات حساب کاربری
              </p>
            </Link>
            <Link to={'my-travels'}>
              <p
                className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
              >
                <img src={profile} alt="" />
                سفرهای من
              </p>
            </Link>
            <Link to={'my-ticket'}>
              <p
                className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
              >
                <img src={profile} alt="" />
                تیکت‌های من
              </p>
            </Link>
            <p
              className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
            >
              <img src={profile} alt="" /> کیف پول
            </p>
            <p
              className={`flex items-center text-red-600 gap-3 mb-6 cursor-pointer w-72 h-12 rounded-md ''}`}
              onClick={logout}
            >
              <img src={profile} alt="" />
              خروج از حساب کاربری
            </p>
          </div>
        </div>

        <main className="basis-3/4">
          <Outlet />
        </main>
        <div className="flex lg:hidden flex-col items-start gap-7 px-4 py-12">
          <div className="hidden line" />
          <Link to={'data-user'}>
            <p
              className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
            >
              <img src={profile} alt="" />
              اطلاعات حساب کاربری
            </p>
          </Link>
          <p
            className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
          >
            <img src={profile} alt="" />
            سفرهای من
          </p>
          <Link to={'my-ticket'}>
            <p
              className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
            >
              <img src={profile} alt="" />
              تیکت‌های من
            </p>
          </Link>
          <p
            className={`flex items-center text-gray-600 gap-3 cursor-pointer w-72 h-12 rounded-md `}
          >
            <img src={profile} alt="" /> کیف پول
          </p>
          <p
            className={`flex items-center text-red-600 gap-3 mb-6 cursor-pointer w-72 h-12 rounded-md ''}`}
            onClick={logout}
          >
            <img src={profile} alt="" />
            خروج از حساب کاربری
          </p>
        </div>
      </div>
    </>
  )
}

export default BaseLayoutAcc
