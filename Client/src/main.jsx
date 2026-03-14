import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import UserSignup from './components/Signup/UserSignup.jsx'
import UserLogin from './components/Login/UserLogin.jsx'
import SellerSignup from './components/Signup/SellerSignup.jsx'
import SellerLogin from './components/Login/SellerLogin.jsx'
import Subscription from './components/Profile/Subscription.jsx'
import PaymentHistory from './components/Profile/PaymentHistory.jsx'
import AccountInfo from './components/Profile/AccountInfo.jsx'
import ProfileFeed from './components/Profile/ProfileFeed.jsx'
import MyFeed from './components/Profile/MyFeed.jsx'
import ChatFeed from './components/Chat/ChatFeed.jsx'
import AdDescription from './screens/AdDescription.jsx'
import PostAdvertisement from './components/Advertisement/PostAdvertisement.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './ReduxStore/Store.js'
import ProductFeed from './screens/ProductFeed.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chat',
    element: <ChatFeed />
  },
  {
    path : '/profile-feed',
    element : <ProfileFeed />,
    children : [
      {
        index : true,
        element : <AccountInfo />,
      },
      {
        path : '/profile-feed/account-info',
        element : <AccountInfo />,
      },
      {
        path : '/profile-feed/subscription',
        element : <Subscription />,
      },
      {
        path : '/profile-feed/payment-history',
        element : <PaymentHistory />,
      },
      {
        path : '/profile-feed/my-advertisements',
        element : <MyFeed />,
      },
    ]
  },
  {
    path: '/payment',
    element: <Subscription />
  },
  {
    path: '/user-signup',
    element: <UserSignup />
  },
  {
    path: '/seller-signup',
    element: <SellerSignup />
  },
  {
    path: '/user-login',
    element: <UserLogin />
  },
  {
    path: '/seller-login',
    element: <SellerLogin />
  },
  {
    path: '/AdDescription',
    element: <AdDescription />,
  },
  {
    path: '/postAdvertisement',
    element: <PostAdvertisement />,
  },
  {
    path : '/products-feed',
    element : <ProductFeed />,
  }
])

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

)
