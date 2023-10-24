import React from 'react';
import NavBar from "@/components/NavBar/index"
import Popular from '../components/PopularTicked';
import History from '@/components/NavBar/History';
import Footer from "@/components/Footer/index.jsx";
import CustomizedAccordions from '@/components/Accordion';
import Advantages from "../components/Advantages/index.jsx";
import SearchBox from "@/components/NavBar/SearchBox/index";
import HomePageComponenets from '../components/HomePagePictures/HomePageComponenets';
import './style.css'


function HomePage() {
    return (
        <div className='flex items-center flex-col w-full'>
            <NavBar/>
            <SearchBox/>
            <HomePageComponenets/>
            <Popular/>
            <CustomizedAccordions/>
            <Advantages/>
            <Footer/>
       </div>
    );
}

export default HomePage;