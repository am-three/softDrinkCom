import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'

import { RouterProvider } from 'react-router-dom'
import { router } from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* <RouterProvider router={router} /> */}

  </StrictMode>,
)
