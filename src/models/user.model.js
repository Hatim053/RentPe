import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    fullName : {
        type : String,
        default : 'user'
    },
    password : {
        type : String,
        required : true,
    },
    profileImage : {
        type : String,
    },
    accountType : {
        type : String,
        enum : ['seller' , 'user'],
        default : 'user',
    },
    refreshToken : {
        type : String,
    }
} , {timestamps : true})

const User = mongoose.model('User' , userSchema)

export default User