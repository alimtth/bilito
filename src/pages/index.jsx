import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Ui/Button';
import Input from '@/components/Ui/Input';
import DatePickerComponent from "@/components/DatePicker/DatePickerComponent.jsx";
import Footer from "@/components/Footer/index.jsx";
import NavBar from "@/components/NavBar/index"
import './style.css'
import CustomizedAccordions from '@/components/Accordion';
import Advantages from "../components/Advantages/index.jsx";
import HomePageComponenets from '../components/HomePagePictures/HomePageComponenets';
import Popular from '../components/PopularTicked';

function HomePage(props) {
    return (
        <>
            <NavBar/>
            <DatePickerComponent/>
            <HomePageComponenets/>
            <Popular/>
            <CustomizedAccordions/>
            <Advantages/>
            <Footer/>
       </>
    );
}

export default HomePage;