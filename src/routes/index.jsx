import {createBrowserRouter} from "react-router-dom";
import React from "react";
import HomePage from "../pages/index.jsx";


const routes =[
    {
        path: "/",
        element: <HomePage/>,
    },
 
];
const router =  createBrowserRouter(routes)
export default router;