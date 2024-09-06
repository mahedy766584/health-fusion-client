import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Routes/Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Provider/AuthProvider'
import {Toaster} from "react-hot-toast"

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthProvider>
          <RouterProvider router={myCreatedRouter} />
        </AuthProvider>
        <Toaster/>
      </ChakraProvider>
    </QueryClientProvider>
  </HelmetProvider>
)
