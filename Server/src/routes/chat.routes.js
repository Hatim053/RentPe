import { Router } from "express"
import { handleLoadChats , handleLoadChatList } from '../controllers/chat.controller.js'

const chatRoutes = Router()


chatRoutes.get('/chats' , handleLoadChatList)
chatRoutes.get('/chats/messages' , handleLoadChats)



export default chatRoutes