import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/index.jsx";
import AuthPage from "../pages/Auth.jsx";
import ProfilePage from "../pages/Profile.jsx";
import FormDialog from "../components/LoginDialog/index.jsx";

const routes =[
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/auth",
        element: <FormDialog/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
];
const router =  createBrowserRouter(routes)
export default router;