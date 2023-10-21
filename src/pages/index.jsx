import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Ui/Button';
import Input from '../components/Ui/Input';
import './style.css'
import DatePickerComponent from "../components/DatePicker/DatePickerComponent.jsx";
import Footer from "../components/Footer/index.jsx";
import CustomizedAccordions from "../components/Accordion/index.jsx";

function HomePage(props) {
    return (
        <>
            <h1>Pages:</h1>
            <Button>dafabdhln</Button>
            <Link to={'/profile'}><Button variant='fill' size='xl'>Profile</Button></Link>
            <Link to={'/auth'}><Button variant='fill' size='xl'>Auth</Button></Link>
            <Input >salam</Input>
        
            <Link to={'/profile'}><Button>Profile</Button></Link>
            <Link to={'/auth'}><Button>Auth</Button></Link>
            <DatePickerComponent/>
            <CustomizedAccordions/>
            <Footer/>
       </>
    );
}

export default HomePage;