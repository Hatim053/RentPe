import React, { useEffect, useState } from "react"
import   socket  from "../../socket.js"
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
      <div className="messages">
        {chat.map((msg, i) => (
          <div key={i} className={msg.senderId === currentUserId ? "mine" : "theirs"}>
            {msg.message}
          </div>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default Chat
