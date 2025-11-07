import { Router } from "express"
import { handleLoadChats ,
         handleLoadSellerChatList , 
         handleLoadUserChatList } from '../controllers/chat.controller.js'

import { authenticateSeller , authenticateUser } from '../middlewares/authentication.js'         

const chatRoutes = Router()


chatRoutes.get('/chats/:userId' , authenticateUser , handleLoadUserChatList)
chatRoutes.get('/chats/:sellerId' , authenticateSeller , handleLoadSellerChatList)
chatRoutes.get('/messages/:chatId' , handleLoadChats)



export default chatRoutes