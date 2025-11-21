import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import UserSignup from './components/Signup/UserSignup/UserSignup.jsx'
import UserLogin from './components/Login/UserLogin/UserLogin.jsx'

import SellerSignup from './components/Signup/SellerSignup/SellerSignup.jsx'
import SellerLogin from './components/Login/SellerLogin/SellerLogin.jsx'

import Payment from './components/Subscription/Payment/Payment.jsx'
import PaymentHistory from './components/Subscription/PaymentHistory/PaymentHistory.jsx'

import Profile from './components/Profile/Profile.jsx'
import Banner from './components/Banner/Banner.jsx'
import Chat from './components/Chat/Chat.jsx'

import AdDescription from './components/Advertisement/AdDescription/AdDescription.jsx'
import PostAdvertisement from './components/Advertisement/PostAdvertisement/PostAdvertisement.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/Store.js'

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
  path : '/user-signup',
  element : <UserSignup />
 },
 {
  path : '/seller-signup',
  element : <SellerSignup />
 },
 {
  path : '/user-login',
  element : <UserLogin />
 },
 {
  path : '/seller-login',
  element : <SellerLogin />
 },
 {
 path : '/payment-history',
 element : <PaymentHistory />
 },
 {
  path : '/AdDescription',
  element : <AdDescription />,
 },
 {
  path : '/postAdvertisement',
  element : <PostAdvertisement />,
 },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
