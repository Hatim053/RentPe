import { Router } from "express"
import { handleUserLogin , handleUserSignup , updateUser} from "../controllers/user.controller.js"
import upload from '../middlewares/multer.js'
import { authenticateUser } from "../middlewares/authentication.js"

const userRoutes = Router()

userRoutes.post('/login' , handleUserLogin)
userRoutes.post('/signup' , handleUserSignup)
userRoutes.post('/uploadProfile' , authenticateUser  , upload.single('profileImage') , updateUser)


export default userRoutes