// eslint-disable-next-line no-unused-vars
import React, {useMemo, useState} from 'react'
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
import useGetCities from '@/api/hooks/use-get-cities'
import SelectField from '@/components/Ui/SelectField'

const filters = [
  {
    key: 'destination',
  },
  {
    key: 'origin',
  },
  {
    key: 'departure',
  },
  {
    key: 'capacity',
  },
  {
    key: 'class',
  },
]
function SearchBox() {
  // const [query, setQuery] = useState(() => searchParams.get('q'))
  // const [destinationValue, setDestinationValue] = useState('')
  // const [travelDateValue, setTravelDateValue] = useState('')
  // const [passengerCountValue, setPassengerCountValue] = useState('')
  // const [flightClassValue, setFlightClassValue] = useState('')
  const [internationalFlights, setInternationalFlights] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const citiesQuery = useGetCities()

  const navigate = useNavigate()

  const appliedFilters = useMemo(() => {
    const res = {}
    filters.forEach((filter) => {
      res[filter.key] = searchParams.get(filter.key) || ''
    })

    return res
  }, [searchParams])

  const [localFilters, setLocalFilters] = useState(appliedFilters)

  const updataLocal = (key, value) => {
    setLocalFilters((s) => ({...s, [key]: value}))
  }

  const handleFlight = () => {
    setInternationalFlights(!internationalFlights)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/ticket')
    setSearchParams((s) => ({
      ...s,
      ...localFilters,
    }))
  }

  return (
    <>
      <Fade bottom>
        <div className="lg:z-20 lg:-m-28 md:sm:shadow-2xl sm:shadow-none rounded lg:w-fit m-auto">
          <div className="bg-white flex flex-col lg:items-start items-center rounded-xl p-6">
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
              <Button
                size="lg"
                variant="fill"
                className={'lg:text-sm sm:py-4 px-8 '}
              >
                یک طرفه
              </Button>
              <Button variant="outline" className={'lg:text-sm sm:py-4 px-8'}>
                رفت و برگشت
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={'lg:text-sm sm:py-4 px-8 '}
              >
                چند مسیره
              </Button>
            </div>
            <form
              className="flex flex-col lg:flex lg:flex-row lg:gap-4 w-full lg:w-auto flex-wrap items-center gap-2 "
              onSubmit={handleSearch}
            >
              <SelectField
                value={localFilters.origin}
                label="مبدا"
                onChange={(option) => updataLocal('origin', option.id)}
                options={citiesQuery.data || []}
              />
              <ConnectingAirportsIcon />
              <SelectField
                value={localFilters.destination}
                label="مقصد"
                onChange={(option) =>
                  updataLocal('destination', option.id)
                }
                options={citiesQuery.data || []}
              />
              <InputTextField
              className={'text-right sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={localFilters.departure}
              type='date'
              onChange={(e) => updataLocal('departure', e.target.value)}
            >
              تاریخ 
            </InputTextField>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={localFilters.capacity}
              onChange={(e) => updataLocal('capacity',e.target.value)}
            >
              تعداد مسافر
            </InputTextField>
            <InputTextField
              className={'sm:px-44 lg:px-0 '}
              size={'ssl'}
              value={localFilters.class}
              onChange={(e) => updataLocal('class',e.target.value)}
            >
              کلاس پرواز
            </InputTextField>
              <Button
                variant="fill"
                size="xl"
                className={' sm:px-56 lg:px-3'}
                type="submit"
              >
                <img src={searchIcon} />
                جستجو
              </Button>
            </form>
          </div>
        </div>
      </Fade>
      <History />
    </>
  )
}

export default SearchBox
