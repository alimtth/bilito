import React from 'react';
import {Link} from "react-router-dom";

function AuthPage(props) {
    return (
        <div>
            <h1>Auth page</h1>
            <Link to={'/'}>صفحه اول</Link>
        </div>
    );
}

export default AuthPage;