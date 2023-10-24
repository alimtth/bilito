import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/index.jsx";
import AuthPage from "../pages/Auth.jsx";
import ProfilePage from "../pages/Profile.jsx";
import NotFuond from "@/pages/404/NotFuond.jsx";
import TickedList from "@/pages/PageTicketList/TickedList.jsx";
import Login from "@/components/Auth/Login/Login.jsx";


const routes =[
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/auth",
        element: <AuthPage/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "*",
        element: <NotFuond/>
    },
    {
        path: "/ticket",
        element: <TickedList />
    },
    {
        path: "/login",
        element: <Login /> 
    },
];
const router =  createBrowserRouter(routes)
export default router;