import React from 'react';
import {Link} from "react-router-dom";
import Button from '../components/Ui/Button';

function AuthPage(props) {
    return (
        <div>
            <h1>Auth page</h1>
            <Link to={'/'}><Button>FirstPage</Button></Link>
        </div>
    );
}

export default AuthPage;