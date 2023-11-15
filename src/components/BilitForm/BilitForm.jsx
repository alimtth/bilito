import iconTimer from '@/assets/Images/Icons/timer.svg'
import iconAirPlan from '@/assets/Images/Icons/airplaneblue.svg'
import iconBag from '@/assets/Images/Icons/bag.svg'
import line from '@/assets/Images/Icons/Line.svg'
import Buttons from '@/components/Ui/Button'
import {IoIosArrowDown} from 'react-icons/io'

// eslint-disable-next-line react/prop-types
export const BilitForm = ({forth, back, imagess}) => {
  return (
    <div className="p-6 flex justify-between">
      <div className="pt-6 gap-6 w-[575px] flex items-center ">
        <img src={imagess} />
        <div>
          <div className="pl-8 gap-2 flex flex-col items-center">
            <p>02:50</p>
            <p className="text-gray-600">{forth}</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="gap-6 flex flex-col">
            <div className="gap-[2px] flex items-center justify-center">
              <img src={iconTimer} />
              <p className="text-gray-500 ">19:00</p>
            </div>
            <div className="relative flex items-center justify-center ">
              <img className="z-20" src={iconAirPlan} />
              <span className="absolute w-[142px] h-[1px] fill-none z-10">
                <img src={line} />
              </span>
            </div>
            <div className="gap-[2px] flex items-center justify-center">
              <img src={iconBag} />
              <p className="text-gray-500">20Kg</p>
            </div>
          </div>
        </div>

        <div className="pr-8 gap-2 flex flex-col items-center">
          <p>21:50</p>
          <p className="text-gray-600">{back}</p>
        </div>
        <div className="pr-6 flex items-center">
          <p> دوشنبه 6 شهریور</p>
        </div>
      </div>
      <div className="pt-4 flex items-start ">
        <Buttons className={`gap-0 text-blue-500 border-none`}>
          جزییات قیمت
          <IoIosArrowDown />
        </Buttons>
      </div>
    </div>
  )
}

