import asyncHandler from '../utilities/asyncHandler.js'
import Chat from '../models/Chat.model.js'



// this function is to load all chat list to which user / seller has talked
const handleLoadChatList = asyncHandler(async (req , res) => {


})


// this function is to load all messages of the selected / specific chat
const handleLoadChats  = asyncHandler(async (req , res) => {

})





export {
    handleLoadChats,
    handleLoadChatList,
}