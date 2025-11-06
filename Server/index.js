import 'dotenv/config'
import server from './app.js'
import {Server} from 'socket.io'
import connectDb from './src/db/index.js'
import { disconnect } from 'mongoose'
import Chat from './src/models/Chat.model.js'
import Message from './src/models/message.model.js'

const port = process.env.PORT


// socket logic part
const io = new Server(server , {
    cors : {
        origin : 'http://localhost:5173',
        methods : ['GET' , 'POST'],
        credentials : true,
    }
})

let onlineUsers = [] // for storing users ki databaseId aur socketId in key value pair

io.on('connection' , (socket) => {

 // When a user sends a message
socket.on('registerUser' , (userId) => {
    onlineUsers[userId] = socket.id
})


socket.on('sendMessage' , async( {senderId , receiverId , message} ) => {

    let existingChat = await Chat.findOne({ // checking if both users and sellers had any chats before
        participants : { $all : [senderId , receiverId] }
    }) 


    if(! existingChat) { // means koi chats nhi h to creating new one
        existingChat = await Chat.create({
            participants : [senderId , receiverId],
        })
    }

        const newMessage = await Message.create({ // creating document of the message 
            chatId : existingChat._id,
            senderId,
            message,
        })


        const revceiverSocketId = onlineUsers[receiverId]
        
        if(revceiverSocketId) { // means seller[receiver] online he so emitting message to him
        io.to(revceiverSocketId).emit('receiveMessage' , {
            chatId : existingChat._id,
            senderId,
            message
        })
        }

})



    io.on('disconnect' , () => {
        console.log('user disconnected')
    })
})







// listening on port and data base connection
connectDb(process.env.MONGODB_URL).then((res) => {
    server.listen(port , () => {
        console.log(`server is running on port ${port}`)
    })
})

