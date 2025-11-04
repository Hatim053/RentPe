import upload from "../middlewares/multer.js"
import { authenticateSeller, authenticateUser } from "../middlewares/authentication.js"
import { Router } from "express"
import { handleCreateAdvertisement, handleFetchLiveAds, handleDeleteAdvertisement, handleLiveAd } from '../controllers/advertisement.controller.js'

const advertisementRoutes = Router()

advertisementRoutes.post('/create', authenticateSeller, upload.fields([{ name: 'images', maxCount: 6 }]), handleCreateAdvertisement)


advertisementRoutes.get('/liveAds', authenticateUser, handleFetchLiveAds)

export default advertisementRoutes