import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './providers/AuthProvider'
import { UserDataProvider } from './providers/UserDataProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {PassengerProvider} from "@/providers/PassengerProvider.jsx";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <UserDataProvider>
          <AuthProvider>
            <PassengerProvider>
            </PassengerProvider>
          </AuthProvider>
        </UserDataProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
