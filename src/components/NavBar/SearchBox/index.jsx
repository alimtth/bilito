// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import AirplanSelected from '@/assets/Images/Icons/AirplaneSelected.svg'
import AirplanNotSelected from '@/assets/Images/Icons/AirplaneNotSelected.svg'
import Button from '@/components/Ui/Button'
import searchIcon from '@/assets/Images/Icons/search-normal.svg'
import History from '../History'
import InputTextField from '@/components/Ui/InputTextField'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
// import { apiSearch } from "@/api/search"

function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('q'))
  const [originValue, setOriginValue] = useState('')
  const [destinationValue, setDestinationValue] = useState('')
  const [travelDateValue, setTravelDateValue] = useState('')
  const [passengerCountValue, setPassengerCountValue] = useState('')
  const [flightClassValue, setFlightClassValue] = useState('')
  const [internationalFlights, setInternationalFlights] = useState(true)
  const navigate = useNavigate()

  const handleFlight = () => {
    setInternationalFlights(!internationalFlights)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/ticket')
    setSearchParams((s) => ({
      ...s,
      q: query,
      origin: originValue,
      destination: destinationValue,
      travelDate: travelDateValue,
      passengerCount: passengerCountValue,
      flightClass: flightClassValue,
    }))
  }
  return (
    <>
      <Fade bottom>
        <div className="lg:z-20 lg:-m-28 md:sm:shadow-2xl sm:shadow-none rounded lg:w-fit m-auto">
          <div
            className="bg-white flex flex-col lg:items-start items-center rounded-lg p-6"
          >
            <div>
              <ul className="flex justify-around gap-10 md:text-base sm:text-3xl ">
                <li
                  className={`flex gap-2 ${
                    internationalFlights ? 'text-blue-500 font-bold' : ''
                  }`}
                >
                  <img
                    src={`${
                      internationalFlights
                        ? AirplanSelected
                        : AirplanNotSelected
                    }`}
                    className="md:block w-full h-full object-cover hidden"
                  />
                  پروازخارجی
                </li>
                <li onClick={handleFlight}>
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </li>
                <li
                  className={`flex gap-2 ${
                    internationalFlights ? '' : 'text-blue-500 font-bold'
                  }`}
                >
                  <img
                    src={`${
                      internationalFlights
                        ? AirplanNotSelected
                        : AirplanSelected
                    }`}
                    className="md:block w-full h-full object-cover hidden"
                  />
                  <span className={'basis-full'}>پروازداخلی</span>
                </li>
              </ul>
            </div>
            <hr className="" />
            <div className="line w-full" />
            <div className="flex py-6 gap-4 items-center justify-center">
              <Button size="lg" variant="fill" className={'sm:py-4 px-8'}>
                یک طرفه
              </Button>
              <Button variant="outline" className={'sm:py-4 px-8'}>
                رفت و برگشت
              </Button>
              <Button size="lg" variant="outline" className={'sm:py-4 px-8 '}>
                چند مسیره
              </Button>
            </div>
            <form
              className="flex flex-col lg:flex lg:flex-row lg:gap-4 w-full lg:w-auto flex-wrap items-center sm:gap-8 "
              onSubmit={handleSearch}
            >
              <InputTextField
                size="sm"
                className={'sm:px-44 lg:px-0 '}
                value={query ? query : ''}
                onChange={(e) => setQuery(e.target.value)}
              >
                مبدا
              </InputTextField>
              <ConnectingAirportsIcon />
              <InputTextField
                size="sm"
                value={destinationValue}
                onChange={(e) => setDestinationValue(e.target.value)}
                className={'sm:px-44 lg:px-0'}
              >
                مقصد
              </InputTextField>
              <InputTextField
                size="sm"
                value={travelDateValue ? travelDateValue : ''}
                onChange={(e) => setTravelDateValue(e.target.value)}
                className={'sm:px-44 lg:px-0'}
              >
                تاریخ رفت و برگشت
              </InputTextField>
              <InputTextField
                size="sm"
                value={passengerCountValue}
                onChange={(e) => setPassengerCountValue(e.target.value)}
                className={'sm:px-44 lg:px-0'}
              >
                تعداد مسافر
              </InputTextField>
              <InputTextField
                size="sm"
                value={flightClassValue}
                onChange={(e) => setFlightClassValue(e.target.value)}
                className={'sm:px-44 lg:px-0'}
              >
                کلاس پرواز
              </InputTextField>
              {/* <Link to={"ticket"}> */}
              <Button
                variant="fill"
                size="xl"
                className={'sm:px-56 lg:px-3'}
                type="submit"
              >
                <img src={searchIcon} />
                جستجو
              </Button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </Fade>
      <History />
    </>
  )
}

export default SearchBox
