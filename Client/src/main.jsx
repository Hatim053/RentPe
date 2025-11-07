import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Success from './components/Success.jsx'
import Payment from './components/Payment/Payment.jsx'
import Chat from './components/Chat/Chat.jsx'
import Login from './components/Login/Login.jsx'
import UserSignup from './components/UserSignup/UserSignup.jsx'
import SellerSignup from './components/SellerSignup/SellerSignup.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router  = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/payment-success',
    element : <Success />
  },
 {
    path : '/payment',
    element : <Payment />
 },
 {
  path : '/chat',
  element : <Chat />
 },
 {
  path : '/login',
  element : <Login />
 },
 {
  path : '/userSignup',
  element : <UserSignup />
 },
 {
  path : '/sellerSignup',
  element : <SellerSignup />
 },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
