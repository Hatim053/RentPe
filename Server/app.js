import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import http from 'http'
import cookieParser from 'cookie-parser'
import userRoutes from './src/routes/user.routes.js'
import sellerRoutes from './src/routes/seller.routes.js'
import advertisementRoutes from './src/routes/advertisement.routes.js'
import paymentRoutes from './src/routes/payment.routes.js'
import chatRoutes from './src/routes/chat.routes.js'

const app = express()


const server = http.createServer(app)


// midllewares setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static('public'))
app.use(cors(
    {
        origin : 'http://localhost:5173',
        methods : ['GET' , 'POST'],
        credentials : true,
    }
))


// routes setup
app.use('/user', userRoutes)
app.use('/ad', advertisementRoutes)
app.use('/payment', paymentRoutes)
app.use('/seller', sellerRoutes)
app.use('/api' , chatRoutes)

export default server