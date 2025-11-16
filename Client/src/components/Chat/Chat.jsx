import React, { useEffect, useState } from "react"
import   socket  from "../../socket.js"
import styles from './chat.module.css'
import axios from "axios"



// reference for frontend ui 
function Chat ({ currentUserId, receiverId })  {
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([]);

  // Fetch old messages
  useEffect(() => {
    axios
      .get(`/api/chats/${currentUserId}/${receiverId}`)
      .then((res) => setChat(res.data));
  }, [receiverId]);

  // Listen for live messages
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      if (data.senderId === receiverId) setChat((prev) => [...prev, data])
    });
    return () => socket.off("receiveMessage")
  }, [receiverId])

  const sendMessage = () => {
    if (!message.trim()) return
    socket.emit("sendMessage", { senderId: currentUserId, receiverId, message })
    setChat((prev) => [...prev, { senderId: currentUserId, message }]);
    setMessage("")
  };

  return (
    <>
   <div  className = {styles['chat-container']}>

    <div  className = {styles['chat-sidebar']}>
        <div className = {styles['sidebar-header']}>
            <h3>Chats</h3>
        </div>
        <ul  className = {styles['contact-list']}>
            <li  className = {styles['contact-item']}>
                <div className = {styles['contact-avatar']}>JS</div>
                <div className = {styles['contact-info']}>
                    <span  className = {styles['contact-name']}>John Smith (Seller)</span>
                    <span  className = {styles['last-message']}>Sounds good, I'll send it now...</span>
                </div>
                <span className = {styles['time']}>1:00 PM</span>
            </li>
            <li  className = {styles['contact-item']}>
                <div  className = {styles['contact-avatar']}>AD</div>
                <div  className = {styles['contact-info']}>
                    <span className = {styles['contact-name']}>Alice Doe</span>
                    <span  className = {styles['last-message']}>Did you receive the invoice?</span>
                </div>
                <span  className = {styles['time']}>Yesterday</span>
            </li>
            </ul>
    </div>

    <div  className = {styles['chat-main']}>
        <div  className = {styles['chat-header']}>
            <h4>John Smith (Seller)</h4>
            <div className = {`${styles['status']} ${styles['online']}`}>Online</div>
        </div>

        <div  className = {styles['chat-messages']}>
            <div class="message incoming" className = {`${styles['message']} ${styles['incoming']}`}>
                <p>Hello! I'm interested in the product. Is it still available?</p>
                <span className = {styles['message-time']}>12:55 PM</span>
            </div>

            <div  className = {`${styles['message']} ${styles['outgoing']}`}>
                <p>Yes, it is! Happy to discuss the details.</p>
                <span  className = {styles['message-time']}>1:00 PM</span>
            </div>
            </div>

        <div  className = {styles['chat-input-area']}>
            <input type="text" placeholder="Type a message..."  className = {styles['chat-input']}/>
            <button className = {styles['send-button']}>Send</button>
        </div>
    </div>

</div>
    </>
  )
}

export default Chat
