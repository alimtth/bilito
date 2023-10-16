import React from 'react';
import {Link} from "react-router-dom";

function ProfilePage(props) {
    return (
        <div>
            <h1>Profile page</h1>
            <Link to={'/'}>صفحه اول</Link>
        </div>
    );
}

export default ProfilePage;