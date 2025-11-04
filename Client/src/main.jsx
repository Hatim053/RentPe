import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Success from './components/Success.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router  = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/payment-success',
    element : <Success />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
