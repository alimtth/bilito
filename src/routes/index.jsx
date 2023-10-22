import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/index.jsx";
import AuthPage from "../pages/Auth.jsx";
import ProfilePage from "../pages/Profile.jsx";
import NotFuond from "../pages/404/NotFuond.jsx";

const routes =[
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "*",
        element: <NotFuond />
    }
];
const router =  createBrowserRouter(routes)
export default router;