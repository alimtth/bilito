import titlePic2 from '@/assets/Images/titelePic2.png'
import '../style.css'
import Fade from "react-reveal/Fade";


function HomePageScreen() {
  return (
    <div className="w-full ">
      <div className="flex flex-col relative w-full">
        <img alt={'airplane'} src={titlePic2} className="w-full" />
          <Fade right>
              <p className="absolute text-white font-bold text-lg lg:text-3xl p-5 lg:p-20 pb-0">
                  راحتی و سرعت در
                  <br /> رزرو بلیط هواپیما با بیلیتو
              </p>
          </Fade>
      </div>
    </div>
  )
}

export default HomePageScreen
