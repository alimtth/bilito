import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from "./routes/index.jsx";
import { Router, RouterProvider } from "react-router-dom";
import { AuthProvider } from './providers/AuthProvider';
import { UserDataProvider } from './providers/UserDataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDataProvider>
      <AuthProvider >
        <RouterProvider router={router} />
      </AuthProvider>
    </UserDataProvider>
  </React.StrictMode>,
)
