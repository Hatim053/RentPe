import asyncHandler from '../utilities/asyncHandler.js'
import Chat from '../models/Chat.model.js'
import Message from '../models/message.model.js'


// this function is to load all chat list to which user has talked
const handleLoadUserChatList = asyncHandler(async (req , res) => {
const userId = req.params.userId
const chatList = await Chat.find({
    participants :  userId// before running this controller authoriszed route hoga so user object available rahega
})

if(! chatList) {
    return res
    .status(200)
    .json({
        status : 200,
        chatList : null,
        message : 'no chats data available'
    })
}
return res
.status(200)
.json({
    status : 200,
    chatList,
    message : 'data fetched successfully',
})

})

// this function is to load all messages of the selected / specific chat for both users and sellers
const handleLoadChats  = asyncHandler(async (req , res) => {
const chatId = req.params.chatId
const  messages = await Message.find({
    chatId : chatId,
})

if(! messages) {
    return res
    .status(500)
    .json({
        status : 500,
        messages : null,
        message : 'something went wrong',
    })
}
return res
    .status(200)
    .json({
        status : 200,
        messages,
        message : 'messages fetched succesfully',
    })

})


// this function is to load all chat list to which seller has talked
const handleLoadSellerChatList = asyncHandler(async (req , res) => {
const sellerId = req.params.sellerId
const chatList = await Chat.find({
    participants :  sellerId// before running this controller authoriszed route hoga to seller object availabe rahega
})

if(! chatList) {
    return res
    .status(200)
    .json({
        status : 200,
        chatList : null,
        message : 'no chats data available'
    })
}
return res
.status(200)
.json({
    status : 200,
    chatList,
    message : 'data fetched successfully',
})

})

export {
    handleLoadChats,
    handleLoadUserChatList,
    handleLoadSellerChatList,
}