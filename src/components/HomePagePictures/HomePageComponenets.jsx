// eslint-disable-next-line no-unused-vars
import React from 'react'
import shiraz from '@/assets/Images/Icons/HomePageShiraz.jpg'
import dubai from '@/assets/Images/Icons/HomePageDubai.jpg'
import turkey from '@/assets/Images/Icons/HomePageTurkey.jpg'
import kish from '@/assets/Images/Icons/HomePageKish.jpg'
import '@/components/HomePagePictures/swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


function HomePageComponenets() {
  return (
    <div className="mt-14" id="container">
      <div className='dextop-grid'>
        <div className="grid grid-cols-3 w-full gap-4 ">
          <div className="relative w-full ">
            <div style={{ paddingBottom: "100%" }} />
            <img
              src={kish}
              className="absolute top-0 left-0 h-full object-cover rounded-lg  "
            />

            <div className="absolute bottom-0 ">
              <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                بهترین فصل شنا
              </p>
              <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                خرید بلیط پرواز های کیش
              </button>
            </div>
          </div>
          <div className="relative w-full ">
            <div style={{ paddingBottom: "100%" }} />
            <img
              src={turkey}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0">
              <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                سفر به ترکیه
              </p>
              <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                خرید بلیط پرواز‌های ترکیه
              </button>
            </div>
          </div>

          <div className="grid gap-4">

            <div className="relative w-full ">
              <div style={{ paddingBottom: "50%" }} />
              <img
                src={shiraz}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0">
                <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                  دنیایی از تاریخ و هنر
                </p>
                <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                  خرید بلیط پرواز‌های شیراز
                </button>
              </div>

            </div>
            <div className="relative w-full ">
              <div style={{ paddingBottom: "50%" }} />
              <img
                src={dubai}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0">
                <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                  شگفتی های دیدنی
                </p>
                <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                  خرید بلیط پرواز های دبی
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='mobile-slide'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="relative ">
              <div style={{ paddingBottom: '50%' }} />
              <img
                src={kish}
                alt="Photo of kish island"
                className="absolute top-0 left-0 h-auto rounded-lg object-cover"
              />
              <div className="absolute bottom-0 ">
                <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                  بهترین فصل شنا
                </p>
                <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white ">
                  خرید بلیط پرواز های کیش
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full ">
              <div style={{ paddingBottom: '50%' }} />
              <img
                src={turkey}
                alt="Photo of City turkiye"
                className="absolute top-0 left-0 w-full h-auto rounded-lg object-cover "
              />
              <div className="absolute bottom-0">
                <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                  سفر به ترکیه
                </p>
                <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white">
                  خرید بلیط پرواز‌های ترکیه
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full ">
              <div style={{ paddingBottom: '50%' }} />
              <img
                src={shiraz}
                alt="Photo of takht jamshid shiraz"
                className="absolute top-0 left-0 h-auto rounded-lg object-cover "
              />
              <div className="absolute bottom-0">
                <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                  دنیایی از تاریخ و هنر
                </p>
                <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white">
                  خرید بلیط پرواز‌های شیراز
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full ">
              <div style={{ paddingBottom: '50%' }} />
              <img
                src={dubai}
                alt="Photo of city dubai"
                className="absolute top-0 left-0 h-auto rounded-lg object-cover "
              />
              <div className="absolute bottom-0">
                <p className="pr-4 mr-2 mb-2 text-white font-bold ">
                  شگفتی در صحرا
                </p>
                <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white">
                  خرید بلیط پرواز های دبی
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HomePageComponenets
