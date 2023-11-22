// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import airplane from '@/assets/Images/Icons/airplaneBorder.svg'
import calendar from '@/assets/Images/Icons/calendar.svg'
import profileAdd from '@/assets/Images/Icons/profile-add.svg'
import EditPen from '@/assets/Images/Icons/edit.svg'
import Button from '@/components/Ui/Button'
import NotTicket from '@/assets/Images/Icons/notticket.png'
import InputTextField from '@/components/Ui/InputTextField'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import HomePageScreen from '@/components/NavBar/HomePageScreen'
import SingleTicket from '@/components/TicketList/SingleTicket'
import {apiSearch} from '@/api/search'
import {SideBarForm} from '@/components/SideBarForm/SideBarForm'
import { useRouter } from 'next/router'
import Image from 'next/image'
// import { useQuery } from 'react-query'

function TickedList() {
  const router = useRouter()
  const [trySearch, setTrySearch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchData, setSearchData] = useState([])
  const [query, setQuery] = useState(() => router.query.q)
  const [destination, setDestination] = useState(() =>
  router.query.destination
  )
  const [travelDate, setTravelDate] = useState(() =>
  router.query.travelDate
  )
  const [passengerCount, setPassengerCount] = useState(() =>
  router.query.passengerCount
  )
  const [flightClass, setFlightClass] = useState(() =>
  router.query.flightClass
  )

  const hanldeSearch = (e) => {
    e.preventDefault()
    router.push({
      pathname: "/ticket",
      query: {
        q: query,
        destination,
        travelDate,
        passengerCount,
        flightClass,
      }
    })
    setTrySearch(true)
  }

  console.log(searchData)

  // const {data: searchData, isLoading} = useQuery(
  //   'searchData',
  //   () => apiSearch({
  //     q: query,
  //     destination,
  //       travelDate,
  //       passengerCount,
  //       flightClass,
  //   })
  // )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSearchData = async () => {
    try {
      setIsLoading(true)
      const data = await apiSearch({
        q: query,
        destination,
        travelDate,
        passengerCount,
        flightClass,
      })
      setSearchData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getSearchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, destination, travelDate, passengerCount, flightClass])

  return (
    <div className="flex flex-col items-center">
      <HomePageScreen />
      <section className="flex flex-col relative items-center"></section>
      <section
        className="-m-2 lg:-m-12 z-10 bg-white flex flex-col items-center rounded-lg shadow-2xl"
        id="container"
      >
        {trySearch ? (
          <form
            className="p-6 px-0 gap-3 flex justify-center flex-col lg:flex lg:flex-row lg:gap-6 w-full lg:w-auto flex-wrap items-center sm:gap-8 "
            onSubmit={hanldeSearch}
          >
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            >
              مبدا
            </InputTextField>
            <div className="">
              <ConnectingAirportsIcon />
            </div>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              مقصد
            </InputTextField>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            >
              تاریخ رفت و برگشت
            </InputTextField>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
            >
              تعداد مسافر
            </InputTextField>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
            >
              کلاس پرواز
            </InputTextField>

            <Button variant="fill" type="submit">
              جستجو
            </Button>
          </form>
        ) : (
          <div className="p-6 gap-8 flex justify-center items-center font-bold">
            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <Image src={airplane} alt="airplane" />
              <p>
                بلیط همواپیما {query} به {destination}
              </p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <Image src={calendar} alt="calendar" />
              <p>دوشنبه 6 شهریور</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <Image src={profileAdd} alt="profile-add" />
              <p>3 مسافر</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <Image src={calendar} alt="calendar" />
              <p>اکونومی</p>
            </div>
            <Button variant="fill" onClick={() => setTrySearch(true)}>
              <Image src={EditPen} alt="edit-pen" />
            </Button>
          </div>
        )}
      </section>
      <div className="flex mt-20 gap-6 justify-center" id="container">
        <SideBarForm searchData={searchData} />
        <div className="lg:flex-auto lg:basis-[75%]">
          <div className="flex gap-4 justify-between">
            <div className="flex justify-between items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 basis-3/4 py-2 px-4 ">
              <span>تقویم قیمتی</span>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <div className="flex justify-between items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 basis-1/4 py-2 px-4 ">
              <span>مرتب سازی</span>
              <IoIosArrowDown />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin  mr-[50%] mt-20"></div>
          ) : searchData.length === 0 ? (
            <div className="flex flex-col items-center mt-9">
              <Image src={NotTicket} alt="not-ticket" className="w-[170px]" />
              <div className="outline outline-gray-300 p-9 rounded-md text-center">
                <h4 className="text-gray-700 font-bold">
                  در این تاریخ پروازی برای استانبول به دبی یافت نشد.
                </h4>
                <h3 className="font-light text-gray-100 mt-4 text-lg">
                  در تاریخ دیگری جستجو کنید
                </h3>
              </div>
            </div>
          ) : (
            searchData.map((product) => (
              <SingleTicket
                key={product.id}
                forth={product.forth}
                back={product.back}
                imagess={product.image}
                price={product.price}
                id={product.id}
                length={product.length}
              ></SingleTicket>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TickedList
