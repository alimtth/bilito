import CardPos from '../../assets/Images/card-pos.png'
import GlobalSearch from '../../assets/Images/global-icon.png'
import Monitor from '../../assets/Images/monitor.png'
import HeadPhone from '../../assets/Images/headphone.png'
import Fade from 'react-reveal/Fade';

function Advantages() {

    return (

        <div className="py-12 bg-blue-65 w-full bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="flex justify-around lg:flex-row flex-col custom-container" >
                <Fade top cascade>
                    <div className="flex flex-col justify-between items-center gap-[32px] pt-8 lg:pt-0">
                        <div
                            className="h-[115px]  bg-white border border-blue-300 rounded-2xl p-[19px]">
                            <img className={'w-full h-full object-cover'} alt={'monitor'} src={Monitor}/>
                        </div>
                        <span className="text-xl font-bold leading-7">
            دسترسی آسان و راحت
          </span>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className="flex flex-col justify-between items-center gap-[32px] pt-8 lg:pt-0">
                        <div
                            className="h-[115px] bg-white border border-blue-300 rounded-2xl p-[19px]">
                            <img className={'w-full h-full object-cover'} src={HeadPhone} alt={'headphone'}/>
                        </div>
                        <span className="text-xl font-bold leading-7">پاسخگویی 24 ساعته</span>
                    </div>
                </Fade>
                <Fade top cascade>
                    <div className="flex flex-col justify-between items-center gap-8 pt-8 lg:pt-0">
                        <div
                            className=" h-[115px] bg-white border border-blue-300 rounded-2xl p-[19px]">
                            <img className={'w-full h-full object-cover'}  alt={''} src={GlobalSearch}/>
                        </div>
                        <span className="text-xl font-bold leading-7">خدمات آنلاین</span>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className="flex flex-col justify-between items-center gap-[32px] pt-8 lg:pt-0">
                        <div
                            className="h-[115px] bg-white border border-blue-300 rounded-2xl p-[19px]">
                            <img className={'w-full h-full object-cover'} alt={''} src={CardPos}/>
                        </div>
                        <span className="text-xl font-bold leading-7">
            کمترین نرخ خرید بلیط
          </span>
                    </div>
                </Fade>


            </div>
        </div>
    )
}

export default Advantages
