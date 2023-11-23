import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import { UserDataProvider } from './providers/UserDataProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


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
            <RouterProvider router={router} />
          </AuthProvider>
        </UserDataProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
