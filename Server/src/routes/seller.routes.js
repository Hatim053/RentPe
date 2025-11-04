import { verifyNumber , handleSellerLogin , handleSellerSignup , handlerSellerLogout , uploadProfileImage } from '../controllers/seller.controller.js'
import { authenticateSeller } from "../middlewares/authentication.js"
import upload from '../middlewares/multer.js'

import { Router } from 'express'


const sellerRoutes = Router()


sellerRoutes.post('/login' , handleSellerLogin)
sellerRoutes.post('/signup' , handleSellerSignup)
sellerRoutes.post('/uploadProfile' , authenticateSeller  , upload.single('profile') , uploadProfileImage)
sellerRoutes.post("/send-otp", authenticateSeller , verifyNumber)



export default sellerRoutes