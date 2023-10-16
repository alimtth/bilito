import { createBrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "../pages/index.jsx";
import AuthPage from "../pages/Auth.jsx";
import ProfilePage from "../pages/Profile.jsx";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
];
const router = createBrowserRouter(routes);
export default router;
