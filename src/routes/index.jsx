import React, { Children } from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "@/pages/index.jsx";
import NotFound from "@/pages/404/NotFound.jsx";

import BaseLayout from "@/pages/BaseLayout/index.jsx";
import Login from "@/components/Auth/Login/Login";
import Register from "@/components/Auth/Register/Register"
import TickedList from "@/pages/PageTicketList/TickedList";
import PurChaseSteps from "@/pages/purchase-steps/PurChaseSteps";


const routes =[
    {
        path: '/',
        element: <BaseLayout/>,
        children :[
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path:'login',
                element: <Login/>,
            },
            {
                path:'register',
                element: <Register />
            },
            {
                path:'ticket',
                element: <TickedList />
            },
            {
                path:'shop',
                element: <PurChaseSteps />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
    
];
const router =  createBrowserRouter(routes)
export default router;