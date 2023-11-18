import {useState} from 'react'
import Button from '@/components/Ui/Button.jsx'
import iconetimer from '@/assets/Images/Icons/timer.svg'
import iconeairplan from '@/assets/Images/Icons/airplaneblue.svg'
import iconbag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
import propTypes from 'prop-types'
import {ModalRules} from '../ModalRules/ModalRules'


// eslint-disable-next-line react/prop-types, no-unused-vars
function SingleTicket({forth, back, imagess, price, id, length, children}) {
  const [isloding, setIsloding] = useState(true)
  const [isShow, setIsShow] = useState(false)

  setTimeout(() => {
    setIsloding(false)
  }, 500)

  return (
    <>
      <div className="flex border-gray-10 border rounded-lg flex-col gap-4 mt-6 justify-evenly  ">
        {isloding ? (
          <div className="flex w-[100%] h-[150px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse  py-0">
            <div className="w-1/4 bg-gray-300 "></div>
            <div className=" p-4 md:p-4">
              <h1 className="w-40 h-2 bg-gray-300 rounded-lg "></h1>

              <p className="w-48 h-2 mt-4 bg-gray-450 rounded-lg "></p>

              <div className="flex mt-4 item-center gap-x-2">
                <p className="w-5 h-2  bg-gray-450 rounded-lg "></p>
                <p className="w-5 h-2  bg-gray-450 rounded-lg "></p>
                <p className="w-5 h-2  bg-gray-450 rounded-lg "></p>
                <p className="w-5 h-2  bg-gray-450 rounded-lg "></p>
                <p className="w-5 h-2  bg-gray-450 rounded-lg "></p>
                <p className="w-5 h-2  bg-gray-450 rounded-lg "></p>
              </div>

              <div className="flex justify-between mt-6 item-center">
                <h1 className="w-10 h-2  bg-gray-450 rounded-lg "></h1>

                <div className="h-4 bg-gray-450 rounded-lg w-28 "></div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center px-4 lg:flex-row flex-col gap-4 py-6">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                  صندلی باقی مانده
                </div>
                <div className="bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                  غیر قابل استرداد
                </div>
              </div>
              <div className="flex justify-center items-center gap-[8px]">
                <div className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                  اکونومی
                </div>
                <div className="bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md">
                  سیستمی
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end gap-[64px] px-4 lg:flex-row flex-col">
              <div className="pb-5 gap-6 w-[575px] flex items-center ">
                <img src={imagess} />
                <div>
                  <div className="pl-8 gap-2 flex flex-col items-center">
                    <p>02:{id}</p>
                    <p className="text-gray-600">{forth}(SAW)</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="gap-6 flex flex-col">
                    <div className="gap-[2px] flex items-center justify-center">
                      <img src={iconetimer} />
                      <p className="text-gray-500 ">19:00</p>
                    </div>
                    <div className="relative flex items-center justify-center ">
                      <img className="z-20" src={iconeairplan} />
                      <span className="absolute w-[142px] h-[1px] fill-none z-10">
                        <img src={line} />
                      </span>
                    </div>
                    <div className="gap-[2px] flex items-center justify-center">
                      <img src={iconbag} />
                      <p className="text-gray-500">20Kg</p>
                    </div>
                  </div>
                </div>

                <div className="pr-8 gap-2 flex flex-col items-center">
                  <p>21:50</p>
                  <p className="text-gray-600">{back}(DXB)</p>
                </div>
              </div>
              <div className="flex lg:justify-center lg:items-end gap-6 items-center self-center">
                <div className="text-blue-500">{price} تومان</div>
                <div>
                  <Button size="lg" onClick={() => setIsShow(true)}>
                    جزئیات بلیط
                  </Button>
                  <ModalRules
                    showModal={isShow}
                    setIsShow={setIsShow}
                    forth={forth}
                    back={back}
                    imagess={imagess}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

SingleTicket.propTypes = {
  children: propTypes.node,
  forth: propTypes.string,
  back: propTypes.string,
}

export default SingleTicket
