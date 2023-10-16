import React from 'react';
import {Link} from "react-router-dom";

function HomePage(props) {
    return (
        <div>
            <h1>Pages:</h1>
            <ul>
                <li>
                    <Link to={'/auth'}>Login</Link>
                </li>
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;