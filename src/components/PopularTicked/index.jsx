import azadi from '@/assets/Images/pictureAzadi.svg'
import keshti from '@/assets/Images/pictureHaram.svg'
import haram from '@/assets/Images/pictureKeshti.svg'
import milad from '@/assets/Images/pictureMilad.svg'
import airplane from '@/assets/Images/Icons/airplane.svg'

function Popular() {
  return (
    <div
      className="flex flex-col justify-center items-center lg:items-start pt-24"
      id="container"
    >
      <div>
        <p className="text-xl pb-3">پرطرفدار ترین پروازهای داخلی</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 bg-blue-100 text-blue-500 border-gray-400 border-solid rounded">
          تهران
        </button>
        <button className="px-4 border-gray-400  border rounded">مشهد</button>
        <button className="px-4 border-gray-400  border rounded">شیراز</button>
        <button className="px-4 border-gray-400  border rounded">کیش</button>
      </div>

      <div className="pt-8 gap-6 flex items-start justify-center lg:justify-start flex-wrap">
        <div>
          <div className=" flex">
            <img src={azadi.src} alt="Photo of Square Azadi" />
            <div className="flex flex-col justify-center items-end flex-2 border-gray-400 border-l border-b border-t rounded-l ">
              <div className="py-2 px-4 gap-2 flex justify-center items-center self-stretch ">
                <p>شیراز</p>
                <img src={airplane.src} alt="" />
                <p className="text-blue-500">تهران</p>
              </div>

              <div className="py-2 px-4 gap-2 flex items-center self-stretch  border-gray-400 border-t ">
                <p className="text-xs text-right text-gray-500 ">
                  شروع قیمت از:
                </p>
                <p className="text-base">1,700,000</p>
                <p className="text-ssm  ">تومان</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" flex shrink-0">
            <img src={haram.src} alt="Ship photo" />
            <div className="flex flex-col justify-center items-end flex-2 border-gray-400 border-l border-b border-t rounded-l ">
              <div className="py-2 px-4 gap-2 flex justify-center items-center self-stretch ">
                <p className="text-blue-500">تهران</p>
                <img src={airplane.src} alt="" />
                <p>کیش</p>
              </div>

              <div className="py-2 px-4 gap-2 flex items-center self-stretch  border-gray-400 border-t ">
                <p className="text-xs text-right text-gray-500 ">
                  شروع قیمت از:
                </p>
                <p className="text-base">2,500,000</p>
                <p className="text-ssm">تومان</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" flex shrink-0">
            <img src={keshti.src} alt="Photo of mashhad shine" />
            <div className="flex flex-col justify-center items-end flex-2 border-gray-400 border-l border-b border-t rounded-l ">
              <div className="py-2 px-4 gap-2 flex justify-center items-center self-stretch ">
                <p className="text-blue-500">تهران</p>
                <img src={airplane.src} alt="" />
                <p>مشهد</p>
              </div>

              <div className="py-2 px-4 gap-2 flex items-center self-stretch  border-gray-400 border-t ">
                <p className="text-xs text-right text-gray-500 ">
                  شروع قیمت از:
                </p>
                <p className="text-base">1,500,000</p>
                <p className="text-ssm">تومان</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex shrink-0 rounded overflow-hidden">
            <img src={milad.src} alt="Photo of milad tower in tehran" />
            <div className="flex flex-col justify-center items-end flex-2 border-gray-400 border-l border-b border-t rounded-l ">
              <div className="py-2 px-4 gap-2 flex justify-center items-center self-stretch ">
                <p>مشهد</p>
                <img src={airplane.src} alt="" />
                <p className="text-blue-500">تهران</p>
              </div>

              <div className="py-2 px-4 gap-2 flex items-center self-stretch  border-gray-400 border-t ">
                <p className="text-xs text-right text-gray-500 ">
                  شروع قیمت از:
                </p>
                <p className="text-base">1,700,000</p>
                <p className="text-ssm">تومان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
