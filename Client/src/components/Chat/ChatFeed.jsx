import { useEffect , useState} from "react"
import styles from '../../styles/chatFeed.module.css'
import ChatList from "./ChatList.jsx"
import ChatBox from './ChatBox.jsx'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import socket from '../../socket.js'



function ChatFeed() {
const[update , setUpdate] = useState(false)
const loggedInUser = useSelector(state => state?.loggedInUser.loggedInUserData)
const navigate = useNavigate()

useEffect(() => {
    if (!loggedInUser) {
        navigate('/user-login')
        return
    }
    if (loggedInUser?._id) socket.emit('registerUser', loggedInUser._id) // emmiting event to backend after user/seller login so that we can store their socketId's
  }, [loggedInUser])

return (
    <>
    <button className = {styles['back-btn']} onClick = {() => navigate(-1)}>← Back</button>
       <div  className = {styles['chat-container']}>
      <ChatList setUpdate = {setUpdate} update = {update} />
      <ChatBox setUpdate = {setUpdate} update = {update}/>
    </div>
    </>
)
}


export default ChatFeed