import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Ui/Button';
import DatePickerComponent from "../components/DatePicker/DatePickerComponent.jsx";

function HomePage(props) {
    return (
        <div>
            <h1>Pages:</h1>
            <Link to={'/profile'}><Button>Profile</Button></Link>
            <Link to={'/auth'}><Button>Auth</Button></Link>
            <DatePickerComponent/>
        </div>
    );
}

export default HomePage;