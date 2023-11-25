import titlePic2 from '@/assets/Images/titelePic2.png'
import '../style.css'
import Fade from 'react-reveal/Fade'
import Typed from 'react-typed'
import airr from '@/assets/gif/airplane-joypixels.gif'

function HomePageScreen() {
  return (
      <div className="flex flex-col relative w-full">
        <img alt={'airplane'} src={titlePic2} className="w-full" />
        <img
          src={airr}
          alt=""
          className="w-40 absolute left-12 hidden md:block"
        />
        <Fade right>
          <p className="absolute text-white font-extrabold text-lg lg:text-3xl p-5 lg:p-20 pb-0">
            <Typed
              strings={[
                ' راحتی و سرعت در <br/><br/>رزرو بلیط هواپیما با بیلیتو...',
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </p>
        </Fade>
      </div>
  )
}

export default HomePageScreen

//commit
