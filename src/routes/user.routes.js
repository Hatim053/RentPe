import { Router } from "express"
import { handleUserLogin , handleUserSignup } from "../controllers/user.controllers.js"

const userRoutes = Router()

userRoutes.post('/login' , handleUserLogin)
userRoutes.post('/signup' , handleUserSignup)



export default userRoutes