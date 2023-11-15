import titlePic2 from '@/assets/Images/titelePic2.png'
import '../style.css'
import Fade from 'react-reveal/Fade'
import Typed from 'react-typed'

function HomePageScreen() {
  return (
    <div className="w-full px-8 rounded-lg ">
      <div className="flex flex-col relative w-full">
        <img alt={'airplane'} src={titlePic2} className="w-full rounded-2xl" />
        <Fade right>
          <p className="absolute text-white font-extrabold text-lg lg:text-4xl p-5 lg:p-20 pb-0">
            <Typed
              strings={[
                'سلاااااااااااااااام',
                'متن دوم',
                ' راحتی و سرعت در رزرو بلیط هواپیما با بیلیتو',
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default HomePageScreen
