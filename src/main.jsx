import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import AuthProviders from './Providers/AuthProviders'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </HelmetProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
