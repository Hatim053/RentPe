import express, { urlencoded } from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import userRoutes from './src/routes/user.routes.js'
import sellerRoutes from './src/routes/seller.routes.js'
import cors from 'cors'
import advertisementRoutes from './src/routes/advertisement.routes.js'
import paymentRoutes from './src/routes/payment.routes.js'
import asyncHandler from './src/utilities/asyncHandler.js'


const app = express()


// midllewares setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static('public'))
app.use(cors())


// routes setup
app.use('/user', userRoutes)
app.use('/ad', advertisementRoutes)
app.use('/payment', paymentRoutes)
app.use('/seller', sellerRoutes)



// callback helper route for razorpay checkout redirection
app.post("/payment/payment-success", (req, res) => {
  res.redirect("http://localhost:5173/payment-success");
});




export default app