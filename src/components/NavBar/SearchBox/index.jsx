// eslint-disable-next-line no-unused-vars
import React, {useMemo, useState} from 'react'
import AirplanSelected from '@/assets/Images/Icons/AirplaneSelected.svg'
import Button from '@/components/Ui/Button'
import searchIcon from '@/assets/Images/Icons/search-normal.svg'
import History from '../History'
import InputTextField from '@/components/Ui/InputTextField'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import {useNavigate, useSearchParams} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import useGetCities from '@/api/hooks/use-get-cities.js'
import {useQuery} from '@tanstack/react-query'
import {apiSearchFlight} from '@/api/search.js'
import SelectField from '@/components/Ui/SelectField.jsx'
import PassengerInput from '@/components/Ui/PassengerInput.jsx'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

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
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const citiesQuery = useGetCities()

  const appliedFilters = useMemo(() => {
    const result = {}

    filters.forEach((filter) => {
      result[filter.key] = searchParams.get(filter.key) || ''
    })

    return result
  }, [searchParams])

  const [localFilters, setLocalFilters] = useState(appliedFilters)
  const updateLocalFilter = (key, value) => {
    setLocalFilters((s) => ({...s, [key]: value}))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/ticket')
    setSearchParams((s) => ({
      ...s,
      ...localFilters,
    }))

    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const searchQuery = useQuery({
    queryFn: () => apiSearchFlight(appliedFilters),
    queryKey: ['search-flight', appliedFilters],
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
  console.log(localFilters?.capacity)
  return (
    <>
      <Fade bottom>
        <div className="lg:z-20 lg:-m-28 md:sm:shadow-2xl sm:shadow-none rounded lg:w-fit m-auto">
          <div className="bg-white flex flex-col lg:items-start items-center rounded-xl p-6">
            <div>
              <ul className="flex justify-around gap-10 md:text-base sm:text-3xl ">
                <li className={`flex gap-2 text-blue-500 font-bold`}>
                  <img
                    src={AirplanSelected}
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
              className="flex flex-col lg:flex lg:flex-row lg:gap-4 w-full lg:w-auto flex-wrap items-center gap-4 "
              onSubmit={handleSearch}
            >
              <SelectField
                value={localFilters.origin}
                label="مبدا"
                onChange={(option) => updateLocalFilter('origin', option.id)}
                options={citiesQuery.data || []}
              />

              <ConnectingAirportsIcon />
              <SelectField
                value={localFilters.destination}
                label="مقصد"
                onChange={(option) =>
                  updateLocalFilter('destination', option.id)
                }
                options={citiesQuery.data || []}
              />
              <DatePicker
                showOtherDays={true}
                style={{
                  padding: '24px 20px',
                  borderRadius: '0.5rem',
                  borderColor: 'rgb(134 134 134 / var(--tw-border-opacity)',
                }}
                placeholder="تاریخ سفر"
                placeholderStyle={{
                  color: 'red',
                }}
                calendar={persian}
                value={
                  localFilters?.departure
                    ? new Date(localFilters.departure)
                    : null
                }
                locale={persian_fa}
                format="D MMMM YYYY"
                onChange={(date) => {
                  const _date = new Date(date.toDate())
                  updateLocalFilter(
                    'departure',
                    `${_date.getFullYear()}-${
                      _date.getMonth() + 1
                    }-${_date.getDate()}`
                  )
                }}
              />
              <PassengerInput
                label="تعداد مسافر"
                onChange={(value) => updateLocalFilter('capacity', value)}
                value={localFilters.capacity}
              />
              <InputTextField
                className={'sm:px-[68px] lg:px-8 '}
                size={'ssl'}
                value={localFilters.class}
                onChange={(e) => updateLocalFilter('class', e.target.value)}
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
