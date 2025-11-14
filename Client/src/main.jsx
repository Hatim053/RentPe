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
import PaymentHistory from './components/PaymentHistory/PaymentHistory.jsx'
import Home from './components/Home/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// payment successfull hone ke baad payment history wale page per re-direct karana he
const router  = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {path : '/home',
    element : <Home />
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
 {
 path : '/payment-history',
 element : <PaymentHistory />
 },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
