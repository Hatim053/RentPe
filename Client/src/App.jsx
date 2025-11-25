import { useMemo } from 'react'
import './App.css'
import  socket  from './socket.js'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Banner from './components/Banner/Banner.jsx'
import Feed from './components/Feed/Feed.jsx'
import Footer from './components/Footer/Footer.jsx'

import { useDispatch , useSelector } from 'react-redux'

function App() {
  
const user = useSelector(state => state?.loggedInUser);

console.log(user)
  useEffect(() => {
    if(user?._id) socket.emit('registerUser' , user._id) // emmiting event to backend after user/seller login so that we can store their socketId's
  } , [user])

  return (
    <>
   <Header />
   <Nav />
    <Banner />
     <Feed searchedQuery = 'furniture'/>
   <Footer />


    </>
  )

}

export default App
