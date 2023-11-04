import React, { Children } from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "@/pages/index.jsx";
import NotFound from "@/pages/404/NotFound.jsx";
import BaseLayout from "@/pages/BaseLayout/index.jsx";
import Login from "@/components/Auth/Login/Login";
import Register from "@/components/Auth/Register/Register"
import TickedList from "@/pages/PageTicketList/TickedList";
import StepShop from "@/pages/StepShop/StepShop";
import AuthPage from "@/pages/Auth";
import AccountPage from "@/pages/AccountPage/AccountPage";
import About from "@/pages/about/About";
import FormListe from "@/pages/PageFormListe/FormListe";




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
                path:'ticket',
                element: <TickedList />
            },
            {
                path:'stepshop',
                element: <StepShop />
            },
            {
                path:'test',
                element: <AuthPage />
            },
            {
                path: 'about',
                element: <About />
            },
        ]
        
    },
    {
        path:'form',
        element: <FormListe />
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
        path: 'account',
        element: <AccountPage />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: "*",
        element: <NotFound/>
    },
    
];
const router =  createBrowserRouter(routes)
export default router;