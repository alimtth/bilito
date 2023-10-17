import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Ui/Button';

function HomePage(props) {
    return (
        <div>
            <h1>Pages:</h1>
            <ul>
            <br />
            
                <li>
                </li>
                <br />
                <li>
                    <Link to={'/profile'}><Button>Profile</Button></Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;