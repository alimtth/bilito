import HistoryIcon from '@/assets/Images/Icons/History.svg'
import CloseSquare from '@/assets/Images/Icons/close-square.svg'
import Button from '@/components/Ui/Button'
import '@/components/NavBar/History/style.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import {sampleTicket} from '@/FakeData/ticket'
import {useState} from 'react'

function History() {
  const [isShow, setisShow] = useState(true)

  const togglisShow = () => {
    setisShow(false)
  }
  return (
    <div className="flex flex-col gap-4 mt-44 flex-wrap custom-container">
      <div className="flex justify-between px-9">
        <div className="flex justify-between gap-4">
          <img src={HistoryIcon} />
          <p>تاریخچه جستجو</p>
        </div>
        <button className="text-blue-500 cursor-pointer" onClick={togglisShow}>
          پاک کردن همه
        </button>
      </div>
      {!isShow && <span className="text-sm pr-6">تاریخچه شما پاک شد</span>}
      {isShow && (
        <Swiper
          spaceBetween={10}
          breakpoints={{
            576: {
              width: 600,
              slidesPerView: 3,
            },
            768: {
              width: 785,
              slidesPerView: 4,
            },
            992: {
              width: 1000,
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >
          {sampleTicket.map((items) => {
            return (
              <div key={items.id}>
                <SwiperSlide>
                  <Button variant="grayBTN">
                    <img src={CloseSquare} />
                    {items.forth} به {items.back}
                  </Button>
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default History
