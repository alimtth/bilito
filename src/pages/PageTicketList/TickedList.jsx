// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
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
import { apiSearch, apiSearchFlight } from '@/api/search'
import { useSearchParams } from 'react-router-dom'
import { SideBarForm } from '@/components/SideBarForm/SideBarForm'
import { useQuery } from '@tanstack/react-query'
import SelectField from '@/components/Ui/SelectField'
import useGetCities from '@/api/hooks/use-get-cities'
import { useMemo } from 'react'
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
// import { useQuery } from 'react-query'

const filters = [
  {
    key: 'destination'
  },
  {
    key: 'origin'
  },
  {
    key: 'departure'
  },
  {
    key: 'capacity'
  },
  {
    key: 'class'
  }
]

function TickedList() {
  const citiesQuery = useGetCities()
  const [trySearch, setTrySearch] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [PriceCalendar, setPriceCalendar  ] = useState(true)
  const appliedFilters = useMemo(() => {
    const result = {}

    filters.forEach(filter => {
      result[filter.key] = searchParams.get(filter.key) || ''
    })

    return result
  }, [searchParams])

  const [localFilters, setLocalFilters] = useState(appliedFilters)

  const updateLocalFilter = (key, value) => {
    setLocalFilters((s) => ({ ...s, [key]: value }))
  }

  const hanldeSearch = (e) => {
    e.preventDefault()
    setSearchParams((s) => ({
      ...s,
      ...localFilters
    }))

    setTrySearch(true)
  }

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
  // const getSearchData = async () => {
  //   try {
  //     setIsLoading(true)
  //     const data = await apiSearch({
  //       q: query,
  //       destination,
  //       travelDate,
  //       passengerCount,
  //       flightClass,
  //     })
  //     setSearchData(data)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   getSearchData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  const searchQuery = useQuery({
    queryFn: () => apiSearchFlight(appliedFilters),
    queryKey: ['search-flight', appliedFilters]
  })

  const queryCity = useMemo(() => {
    return citiesQuery.data?.find((c) => c.id == appliedFilters.origin)
  }, [appliedFilters.origin, citiesQuery.data])


  const destinationCity = useMemo(() => {
    return citiesQuery.data?.find((c) => c.id == appliedFilters.destination)
  }, [appliedFilters.destination, citiesQuery.data])

 const searchData = useMemo(() => {
  return searchQuery.data?.data?.data || []
 }, [searchQuery.data])

 const handleClick = () => {
  setPriceCalendar(!PriceCalendar)
}
  return (
    <div className="flex flex-col items-center">
      <HomePageScreen />
      <section
        className="-m-2 lg:-m-12 z-10 bg-white flex flex-col items-center rounded-lg shadow-2xl custom-container"

      >
        {trySearch ? (
          <form
            className="p-6 px-0 gap-3 flex justify-center flex-col lg:flex lg:flex-row lg:gap-6 w-full lg:w-auto flex-wrap items-center sm:gap-8 "
            onSubmit={hanldeSearch}
          >

            <SelectField
              value={localFilters.origin}
              label="مبدا"
              onChange={(option) => updateLocalFilter('origin', option.id)}
              options={citiesQuery.data || []} />

            <div className="">
              <ConnectingAirportsIcon />
            </div>
            <SelectField
              value={localFilters.destination}
              label="مقصد"
              onChange={(option) => updateLocalFilter('destination', option.id)}
              options={citiesQuery.data || []} />
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={localFilters.departure}
              type='date'
              onChange={(e) => updateLocalFilter('departure', e.target.value)}
            >
              تاریخ رفت و برگشت
            </InputTextField>
            {/* <DatePicker
              calendar={persian}
              locale={persian_fa} /> */}
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={localFilters.capacity}
              onChange={(e) => updateLocalFilter('capacity',e.target.value)}
            >
              تعداد مسافر
            </InputTextField>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={localFilters.class}
              onChange={(e) => updateLocalFilter('class',e.target.value)}
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
              <img src={airplane} alt="airplane" />
              <p>
                بلیط همواپیما {queryCity ? queryCity.name : '...'} به {destinationCity ? destinationCity.name : '...'}
              </p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={calendar} alt="calendar" />
              <p>دوشنبه 6 شهریور</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={profileAdd} alt="profile-add" />
              <p>3 مسافر</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={calendar} alt="calendar" />
              <p>اکونومی</p>
            </div>
            <Button variant="fill" onClick={() => setTrySearch(true)}>
              <img src={EditPen} alt="edit-pen" />
            </Button>
          </div>
        )}
      </section>
      <div className="flex mt-20 gap-6 justify-center custom-container" >
        <SideBarForm searchData={searchData} />
        <div className="lg:flex-auto lg:basis-[75%]">




          <div className="flex gap-4 justify-between">
            <button 
            className="flex justify-between items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 basis-3/4 py-2 px-4 "
            onClick={handleClick}
            >
              <span>تقویم قیمتی</span>
              <span>
                <IoIosArrowDown />
              </span>
            </button>
            <div className="flex justify-between items-center border border-gray-100 rounded-lg hover:border-blue-500 hover:text-blue-500 basis-1/4 py-2 px-4 ">
              <span>مرتب سازی</span>
              <IoIosArrowDown />
            </div>
          </div>
          <div>
       </div>





          {searchQuery.isLoading ? (
            <div className="flex justify-center items-center rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin  mr-[50%] mt-20"></div>
          ) : searchData.length === 0 ? (
            <div className="flex flex-col items-center mt-9">
              <img src={NotTicket} alt="not-ticket" className="w-[170px]" />
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
            searchData.map((flight) => (
              <SingleTicket
                key={flight.id}
                forth={flight.origin?.name}
                back={flight.destination?.name}
                imagess={flight.airline?.image_url}
                price={flight.price}
                id={flight.id}
                length={flight.capacity}
              ></SingleTicket>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TickedList
