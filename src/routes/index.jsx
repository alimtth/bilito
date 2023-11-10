// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/index.jsx";
import NotFound from "@/pages/404/NotFound.jsx";
import BaseLayout from "@/layouts/index.jsx";
import Login from "@/components/Auth/Login/Login";
import Register from "@/components/Auth/Register/Register"
import TickedList from "@/pages/PageTicketList/TickedList";
import StepShop from "@/pages/StepShop/StepShop";
import AuthPage from "@/pages/Auth";
import About from "@/pages/about/About";
import BaseLayoutAcc from "@/pages/AccountPage/BaseLayoutsAccount/BaseLayoutAcc";
import UserData from "@/pages/AccountPage/UserData/UserData";
import EditUser from "@/pages/AccountPage/EditUser/EditUser";
import MyTicket from "@/pages/AccountPage/MyTicket/MyTicket";
import FormListe from "@/pages/PageFormList/FormList";
import Rule from "@/components/TicketList/Rules/Rule";
import GeneralRules from "@/components/TicketList/GeneralRules/GeneralRules";
import LoadRules from "@/components/TicketList/LoadRules/LoadRules";
import MyTravels from "@/pages/AccountPage/MyTravels/MyTravels";




const routes = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },

            {
                path: 'ticket',
                element: <TickedList />,
                children: [
                    {
                        path: 'rule',
                        element: <Rule />,
                        children: [
                            {
                                path: 'grule',
                                element: <GeneralRules />,
                                children: [
                                    {
                                        path: 'loadrules',
                                        element: <LoadRules />
                                    }
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                path: 'stepshop',
                element: <StepShop />
            },
            {
                path: 'test',
                element: <AuthPage />
            },
            {
                path: 'about',
                element: <About />
            },
        ]

    },
    {
        path: 'form',
        element: <FormListe />
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'account',
        element: <BaseLayoutAcc />,
        children: [
            {
                path: 'data-user',
                element: <UserData />,
            },

            {
                path: 'edit-user',
                element: <EditUser />
            },

            {
                path: 'my-ticket',
                element: <MyTicket />
            },
            {
                path: 'my-travels',
                element: <MyTravels />
            },
        ]
    },


    {
        path: 'about',
        element: <About />
    },
    {
        path: "*",
        element: <NotFound />
    },

];
const router = createBrowserRouter(routes)
export default router;