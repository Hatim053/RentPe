import { useMemo } from 'react'
import './App.css'
import  socket  from './socket.js'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
function App({user}) {
  

  useEffect(() => {
    if(user?._id) socket.emit('registerUser' , user._id) // emmiting event to backend after user/seller login so that we can store their socketId's
  } , [user])


  return (
    <>
   
    </>
  )
}

export default App
