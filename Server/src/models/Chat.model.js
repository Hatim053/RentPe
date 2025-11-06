import mongoose from "mongoose"


const chatSchema = new mongoose.Schema({
participants : {
    type : [String], // seller or user dono ki id yaha store karna he 
    required : true,
},
} , {timestamps : true})


const Chat = mongoose.model('Chat' , chatSchema)


export default Chat