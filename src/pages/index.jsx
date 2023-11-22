import Popular from '@/components/PopularTicked'
import CustomizedAccordions from '@/components/Ui/Accordion'
import Advantages from '../components/Advantages/index.jsx'
import SearchBox from '@/components/NavBar/SearchBox/index'
import HomePageComponents from '@/components/HomePagePictures/HomePageComponenets'
import styles from './style.module.css'
import HomePageScreen from '@/components/NavBar/HomePageScreen'

import {useEffect, useState} from "react";
import BubbleTip from "@/components/BubbleTip/BubbleTip.jsx";


function HomePage() {
    const [show,setShow]=useState(false)
    const handle = () => {
        setTimeout(()=>{
            setShow(true)
        },4000)


    }
    useEffect(() => {
        handle()
    }, [])
            return (
    <div className="flex items-center flex-col w-full">
      <HomePageScreen />
      <SearchBox />
      <HomePageComponents />
      <BubbleTip className={show}/>
      <Popular />
      <CustomizedAccordions />
      <Advantages />
    </div>
  )
}

export default HomePage
