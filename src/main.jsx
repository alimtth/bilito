import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/index.jsx'
import {RouterProvider} from 'react-router-dom'
import {AuthProvider} from './providers/AuthProvider'
import {UserDataProvider} from './providers/UserDataProvider'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </UserDataProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
