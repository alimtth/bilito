import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Ui/Button';
import Input from '@/components/Ui/Input';
import DatePickerComponent from "@/components/DatePicker/DatePickerComponent.jsx";
import Footer from "@/components/Footer/index.jsx";
import NavBar from "@/components/NavBar/index"
import './style.css'
import CustomizedAccordions from '@/components/Accordion';

function HomePage(props) {
    return (
        <>
            <NavBar/>
            <DatePickerComponent/>
            <CustomizedAccordions/>
            <Footer/>
       </>
    );
}

export default HomePage;