import React from 'react';
import Popular from '@/components/PopularTicked';
import CustomizedAccordions from '@/components/Accordion';
import Advantages from "../components/Advantages/index.jsx";
import SearchBox from "@/components/NavBar/SearchBox/index";
import HomePageComponents from '@/components/HomePagePictures/HomePageComponenets';
import './style.css'
import HomePageScreen from '@/components/NavBar/HomePageScreen';
import InputTextField from '@/components/Ui/InputTextField.jsx';


function HomePage() {
    return (
        <>
            <HomePageScreen/>
            <SearchBox />
            <HomePageComponents />
            <Popular />
            <CustomizedAccordions />
            <Advantages />
        </>
    );
}

export default HomePage;