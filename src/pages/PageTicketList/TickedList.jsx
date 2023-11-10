// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import airplane from '@/assets/Images/Icons/airplaneBorder.svg'
import calendar from '@/assets/Images/Icons/calendar.svg'
import profileAdd from '@/assets/Images/Icons/profile-add.svg'
import EditPen from '@/assets/Images/Icons/edit.svg'
import Button from '@/components/Ui/Button'
import {Slider} from '@mui/material'
import airport from '@/assets/Images/Icons/Airport.png'
import NotTicket from '@/assets/Images/Icons/notticket.png'
import InputTextField from '@/components/Ui/InputTextField'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import HomePageScreen from '@/components/NavBar/HomePageScreen'
import SingleTicket from '@/components/TicketList/SingleTicket'
import {apiSearch} from '@/api/search'
import {useSearchParams} from 'react-router-dom'

function TickedList() {
  const [trySearch, setTrySearch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchData, setSearchData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('q'))

  const hanldeSearch = (e) => {
    e.preventDefault()
    setSearchParams((s) => ({...s, q: query}))
  }

  const handlSelectTrySearch = () => {
    setTrySearch(true)
  }

  const q = searchParams.get('q')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSearchData = async () => {
    try {
      setIsLoading(true)
      const data = await apiSearch({q})
      setSearchData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getSearchData()
  }, [q])

  return (
    <div className=" flex flex-col items-center">
      <HomePageScreen />
      <section className="flex flex-col relative items-center"></section>
      <section
        className="-m-2 lg:-m-12 z-10 bg-white flex flex-col items-center rounded-lg shadow-2xl"
        id="container"
      >
        {trySearch ? (
          <form
            className="p-6 px-0 gap-3 flex justify-center items-center "
            onSubmit={hanldeSearch}
          >
            <InputTextField
              size={'ssl'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            >
              مبدا
            </InputTextField>
            <div className="">
              <ConnectingAirportsIcon />
            </div>
            <InputTextField size={'ssl'}>مقصد</InputTextField>
            <InputTextField size={'ssl'}>تاریخ رفت و برگشت</InputTextField>
            <InputTextField size={'ssl'}>تعداد مسافر</InputTextField>
            <InputTextField size={'ssl'} className={'rounded-full'}>
              کلاس پرواز
            </InputTextField>

            <Button variant="fill" type="submit">
              جستجو
            </Button>
          </form>
        ) : (
          <div className="p-6 gap-8 flex justify-center items-center font-bold">
            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={airplane} />
              <p>بلیط همواپیما {query} به دبی</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={calendar} />
              <p>دوشنبه 6 شهریور</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={profileAdd} />
              <p>3 مسافر</p>
            </div>

            <div className="gap-2 flex items-center lg:text-xl lg:font-bold text-sm font-light">
              <img src={calendar} />
              <p>اکونومی</p>
            </div>
            <Button variant="fill" onClick={handlSelectTrySearch}>
              <img src={EditPen} />
            </Button>
          </div>
        )}
      </section>

      <div className="flex mt-20 gap-6 justify-center" id="container">
        <div className="lg:block lg:bg-gray-400 lg:rounded-md lg:basis-[25%] lg:p-6 hidden">
          <div className="flex justify-between">
            <h3>تعداد نتایج: 121</h3>
            <h3 className="text-blue-500 text-[13px]"> پاک کردن فیلتر‌ها</h3>
          </div>
          <hr className="mt-[16px] bg-gray-500 w-full h-[2px]" />
          <div className="flex justify-between mt-[16px]">
            <h4>قیمت</h4>
            <IoIosArrowDown />
          </div>
          <div className="flex justify-between mt-[10px]">
            <h4>تا 60.000.000</h4>
            <h4>از 60.000.000</h4>
          </div>
          <div className="flex-col mt-[10px]">
            <Slider
              getAriaLabel={() => 'Temperature range'}
              valueLabelDisplay="auto"
            />
          </div>
          <hr className="mt-[14px] bg-gray-500 w-full h-[2px]" />
          <div className="flex justify-between mt-[16px]">
            <h4>زمان حرکت</h4>
            <IoIosArrowDown />
          </div>
          <div className="flex justify-between mt-[10px]">
            <h4>24:00</h4>
            <h4>00:00</h4>
          </div>
          <div className="flex-col mt-[10px]">
            <Slider
              getAriaLabel={() => 'Temperature range'}
              valueLabelDisplay="auto"
            />
          </div>
          <hr className="mt-[14px] bg-gray-500 w-full h-[2px]" />
          <div className="flex justify-between mt-[16px]">
            <h4>شرکت هواپیمایی </h4>
            <IoIosArrowDown />
          </div>
          <div className="flex flex-col gap-4 items-start mt-[17px]">
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">Pegasus</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">gulf</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">emirates</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">oman</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">Qatar Airways</h3>
            </div>
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <img
                src={airport}
                className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
              />
              <h3 className="mr-[10px]">Fly dubai</h3>
            </div>
            <hr className="mt-[16px] bg-gray-500 w-full h-[2px]" />

            {/* //////////////////////////////////////////////////////////////////// */}
            <div className="flex justify-between">
              <h4>تعداد توقف</h4>
              <IoIosArrowDown />
            </div>
            <div className="flex flex-col gap-4 items-start mt-[17px]">
              <div className="flex">
                <input type="radio" className="border-none outline-none" />
                <img
                  src={airport}
                  className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                />
                <h3 className="mr-[10px]">همه</h3>
              </div>
              <div className="flex">
                <input type="radio" className="border-none outline-none" />
                <img
                  src={airport}
                  className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                />
                <h3 className="mr-[10px]">مستقیم</h3>
              </div>
              <div className="flex">
                <input type="radio" className="border-none outline-none" />
                <img
                  src={airport}
                  className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                />
                <h3 className="mr-[10px]">یک</h3>
              </div>
              <div className="flex">
                <input type="radio" className="border-none outline-none" />
                <img
                  src={airport}
                  className="w-[26px] h-[27px] mr-[10px] rounded-[50px]"
                />
                <h3 className="mr-[10px]">دو یا بیشتر</h3>
              </div>
            </div>
            <hr className="mt-[16px] bg-gray-500 w-full h-[2px]" />
          </div>
        </div>
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
            <div className=" flex justify-center items-center rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin  mr-[50%] mt-20"></div>
          ) : searchData.length === 0 ? (
            <div className="flex flex-col items-center mt-9">
              <img src={NotTicket} alt="" className="w-[170px]" />
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
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TickedList
