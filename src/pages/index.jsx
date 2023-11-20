import Popular from '@/components/PopularTicked'
import CustomizedAccordions from '@/components/Ui/Accordion'
import Advantages from '../components/Advantages/index.jsx'
import SearchBox from '@/components/NavBar/SearchBox/index'
import HomePageComponents from '@/components/HomePagePictures/HomePageComponenets'
import style from './style.module.css'
import HomePageScreen from '@/components/NavBar/HomePageScreen'

function HomePage() {
  return (
    <div className="flex items-center flex-col w-full">
      <HomePageScreen />
      <SearchBox />
      <HomePageComponents />
      <Popular />
      <CustomizedAccordions />
      <Advantages />
    </div>
  )
}

export default HomePage
