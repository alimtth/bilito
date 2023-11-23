import '../style.css'
import Fade from 'react-reveal/Fade'
import Typed from 'react-typed'
import airr from '@/assets/gif/airplane-joypixels.gif'
import bime from '@/assets/Images/bime.svg'

function HomePageInsurance() {
  return (
    <div className="">
      <div className="flex flex-col relative w-full px-4">
        <img alt={'airplane'} src={bime} className="w-full rounded-xl" />
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
    </div>
  )
}

export default HomePageInsurance

