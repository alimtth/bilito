// eslint-disable-next-line no-unused-vars
import React from 'react'
import shiraz from '@/assets/Images/Icons/HomePageShiraz.jpg'
import dubai from '@/assets/Images/Icons/HomePageDubai.jpg'
import turkey from '@/assets/Images/Icons/HomePageTurkey.jpg'
import kish from '@/assets/Images/Icons/HomePageKish.jpg'
import styles from '@/components/HomePagePictures/style.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'


function HomePageComponenets() {
  return (
    <div className="mt-14" id="container">
      <div className={styles.dextop_grid}>
        <div className="grid grid-cols-3 w-full gap-4 ">
          <div className={ "relative w-full"}>
            <div style={{ paddingBottom: "100%" }} />
            <Image
              src={kish}
              className="absolute top-0 left-0 h-full object-cover rounded-lg  "
            />

            <div className="absolute bottom-0 z-10">
              <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                بهترین فصل شنا
              </p>
              <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                خرید بلیط پرواز های کیش
              </button>
            </div>
          </div>
          <div className={"relative w-full"}>
            <div style={{ paddingBottom: "100%" }} />
            <Image
              src={turkey}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 z-10">
              <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                سفر به ترکیه
              </p>
              <button className="mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                خرید بلیط پرواز‌های ترکیه
              </button>
            </div>
          </div>

          <div className="grid gap-4">

            <div className={"relative w-full"}>
              <div style={{ paddingBottom: "50%" }} />
              <Image
                src={shiraz}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg bg-gradient-to-l from-blue-950"
              />
              <div className="absolute bottom-0 z-10">
                <p className="pr-4 mr-2 mb-2 text-white text-xl font-bold ">
                  دنیایی از تاریخ و هنر
                </p>
                <button className=" mr-6 mb-6 border p-2 border-white rounded-lg text-white text-sm">
                  خرید بلیط پرواز‌های شیراز
                </button>
              </div>

            </div>
            <div className={"relative w-full"}>
              <div style={{ paddingBottom: "50%" }} />
              <Image
                src={dubai}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 z-10">
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

      <div className={styles.mobile_slide}>
        <Swiper
          style={{ borderRadius: '10px' }}
          loop={true}
          speed={700}
          autoplay={{
            delay: 2500,
          }}
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          slidesPerView='auto'
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          breakpoints={{
            576: {
              width: 540,
              slidesPerView: 2,
            },
            768: {
              width: 750,
              slidesPerView: 2,
            },
            992: {
              width: 970,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative w-full">
              <div className={ styles.box2 }>
                <div style={{ paddingBottom: '55%' }} />
                <Image
                  src={kish}
                  alt="Photo of kish island"
                  className="absolute top-0 left-0 h-auto rounded-lg object-cover"
                />
              </div>
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
              <div className={ styles.box2 }>
                <div style={{ paddingBottom: '55%' }} />
                <Image
                  src={shiraz}
                  alt="Photo of takht jamshid shiraz"
                  className="absolute top-0 left-0 h-auto rounded-lg object-cover "
                />
              </div>
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
              <div className={ styles.box2 }>
                <div style={{ paddingBottom: '55%' }} />
                <Image
                  src={dubai}
                  alt="Photo of city dubai"
                  className="absolute top-0 left-0 h-auto rounded-lg object-cover "
                />
              </div>
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

          <SwiperSlide>
            <div className="relative w-full ">
              <div className={ styles.box2 }>
                <div style={{ paddingBottom: '55%' }} />
                <Image
                  src={turkey}
                  alt="Photo of City turkiye"
                  className="absolute top-0 left-0 w-full h-auto rounded-lg object-cover "
                />
              </div>
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

        </Swiper>
      </div>
    </div>
  )
}

export default HomePageComponenets
