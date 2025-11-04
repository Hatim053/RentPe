import asyncHandler from '../utilities/asyncHandler.js'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js' 


const authenticateUser = asyncHandler(async(req , res , next) => {
const token = req.cookies?.accessToken
if(! token) {
   return  res.redirect() // token not available so redirect user to login
}

const decodedToken = jwt.verify(token , process.env.ACCESSTOKENSECRET)
if(! decodedToken) {
   return res.redirect() // token error / expired so redirect user to re-generate the accessToken using refreshToken
}
const user = await User.findById({_id : decodedToken._id}).select("-password -refreshToken")
if(! user) {
    return res.redirect() // no user exist so redirect to signup route
}
req.user = user
next()
})

const authenticateSeller = asyncHandler(async(req , res , next) => {
    const token = req.cookies?.accessToken
    if(! token) {
        return res.redirect() // redirect for login route beacuse no token exist
    }
    const decodedToken = jwt.verify(token , process.env.ACCESSTOKENSECRET)

    if(! decodedToken) {
        return res.redirect() // means token error / expire token so redirect to refreshAccess route
    }
    const seller = await Seller.findById({_id : decodedToken._id}).select("-password -refreshToken")

    if(! seller) {
        return res.redirect() // means no seller exist redirect to signup route
    }

    req.seller = seller
    next()
})




export { authenticateUser , authenticateSeller }