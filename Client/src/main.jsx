import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Payment from './components/Payment/Payment.jsx'
import Chat from './components/Chat/Chat.jsx'
import Login from './components/Login/Login.jsx'
import UserSignup from './components/UserSignup/UserSignup.jsx'
import SellerSignup from './components/SellerSignup/SellerSignup.jsx'
import PaymentHistory from './components/PaymentHistory/PaymentHistory.jsx'
import Profile from './components/Profile/Profile.jsx'
import Banner from './components/Banner/Banner.jsx'
import AdDescription from './components/AdDescription/AdDescription.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// payment successfull hone ke baad payment history wale page per re-direct karana he
// jitne bhi form paste kiya he sabme encType or click event ko onClick karna h
const router  = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/profile',
        element : <Profile />,
      },
      {
        path : 'home',
        element : <Banner />
      }
    ]
  },
  {
    path : '/payment-success',
    element : <PaymentHistory />
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
 {
  path : '/AdDescription',
  element : <AdDescription />,
 },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
