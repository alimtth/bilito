import ArrowLeft from '@/assets/Images/Icons/arrow-left.svg'
import ArrowRight from '@/assets/Images/Icons/arrow-right.svg'
import HistoryIcon from '@/assets/Images/Icons/History.svg'
import CloseSquare from '@/assets/Images/Icons/close-square.svg'
import Button from '@/components/Ui/Button'
import "@/components/NavBar/History/style.css"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

function History() {
  return (
    
    <div className="flex flex-col gap-4 mt-44 flex-wrap" id="container">

      <div className="flex flex-row gap-9 justify-between flex-wrap">
        <Button className="hidden lg:flex" variant="grayBTN">
          <img src={ArrowRight} />
        </Button>
        <Button className="hidden lg:flex" variant="grayBTN">
          <img src={ArrowLeft} />
        </Button>
      </div>

      <div className="flex justify-between">
        <div className="flex justify-between gap-4">
          <img src={HistoryIcon} />
          <p>تاریخچه جستجو</p>
        </div>
        <p className="text-blue-500 cursor-pointer">پاک کردن همه</p>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            نجف به قم
          </Button>
        </SwiperSlide>

        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            تهران به دبی
          </Button>
        </SwiperSlide>

        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            تهران به شیراز
          </Button>

        </SwiperSlide>
        <SwiperSlide>

          <Button variant="grayBTN">
            <img src={CloseSquare} />
            تهران به امارات
          </Button>
        </SwiperSlide>

        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            عمان به کانادا
          </Button>
        </SwiperSlide>

        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            قم به عراق
          </Button>
        </SwiperSlide>

        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            اسپانیا دبی
          </Button>
        </SwiperSlide>

        <SwiperSlide>
          <Button variant="grayBTN">
            <img src={CloseSquare} />
            امریکا به المان
          </Button>
        </SwiperSlide>
      </Swiper>

    </div>

  )
}

export default History
