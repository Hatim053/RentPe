import { useMemo, useState } from 'react'
import './App.css'
import  socket  from './socket.js'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Banner from './components/Banner/Banner.jsx'
import Feed from './components/Feed/Feed.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import { addSearchedAds } from './user/feedSlice.js'

import { useDispatch , useSelector } from 'react-redux'

function App() {
  
const user = useSelector(state => state?.loggedInUser)
const navigate = useNavigate()
if(! user) navigate('/user-login')
  const dispatch = useDispatch()
const [searchedQuery , setSearchedQuery] = useState(null)
const [location , setLocation] = useState('Bhopal')


  useEffect(() => {
    if(! user) navigate('/user-login')
    if(user?._id) socket.emit('registerUser' , user._id) // emmiting event to backend after user/seller login so that we can store their socketId's
  } , [user])
      useEffect( () => {
    let response = fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/ad/query/${searchedQuery || 'furniture'}/${location || 'Bhopal'}`)
     
    response.then((data) => data.json())
    .then((res) => dispatch(addSearchedAds(res.ads)))
    } , [searchedQuery , location])

  return (
    <>
   <Header  setSearchedQuery = {setSearchedQuery} setLocation = {setLocation} />
   <Nav setSearchedQuery = {setSearchedQuery}/>
   {searchedQuery == null ?  <Outlet /> : ''}
     <Feed />
   <Footer />


    </>
  )

}

export default App
