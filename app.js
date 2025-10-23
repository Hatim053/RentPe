import express, { urlencoded } from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import userRoutes from './src/routes/user.routes.js'
import cors from 'cors'

const app = express()
app.use(express.json({limit : '16kb'}))
app.use(urlencoded())
app.use(cookieParser())
app.use(express.static('./public/images'))
app.use(cors())

app.use('/user' , userRoutes)

export default app