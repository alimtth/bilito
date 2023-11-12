import titlePic2 from '@/assets/Images/titelePic2.png'
import '../style.css'


function HomePageScreen() {
  return (
    <div className="w-full ">
      <div className="flex flex-col relative w-full">
        <img src={titlePic2} className="w-full" />
        <p className="absolute text-white font-bold text-lg lg:text-3xl p-20">
          راحتی و سرعت در
          <br /> رزرو بلیط هواپیما با بیلیتو
        </p>
      </div>
    </div>
  )
}

export default HomePageScreen
