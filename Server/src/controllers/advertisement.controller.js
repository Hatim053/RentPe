import asyncHandler from '../utilities/asyncHandler.js'
import Advertisment from '../models/advertisement.model.js'
import uploadOnCloudinary from '../utilities/cloudinary.js'


const handleCreateAdvertisement = asyncHandler(async (req, res, next) => {
    // here we will be having a seller who is creating a advertisement because we are injecting a middleware before htting this route and from req object we can get the seller

    const sellerId = req.seller._id
    const { serviceType, title, description, city, address, price, homeDelivery, mobileNo } = req.body

    if (!serviceType || !title || !city || !price || !homeDelivery || !mobileNo) {
        return res
            .status(401)
            .json('All Fields Are Required')
    }


    // uploading files on cloudinary
    const images = req.files['images']
    if (!images || images.length == 0) {
        return res
            .status(401)
            .json('Images Required')
    }

    const imageFiles = []

    for (let i = 0; i < images.length; i++) {
        const imageOnCloudinary = await uploadOnCloudinary(images[i].path)
        imageFiles.push(imageOnCloudinary.url)
    }

    const createdAdvertisement = await Advertisment.create({
        sellerId,
        serviceType,
        title,
        description,
        city,
        address,
        price,
        homeDelivery,
        imageFiles,
        mobileNo,
    })

    console.log(createdAdvertisement)
    return res
        .status(201)
        .json({
            status: 201,
            message: 'Advertisement Created Successfully'
        })

})


const handleFetchLiveAds = asyncHandler(async (req, res, next) => {
    const liveAds = await Advertisment.find({ live: true })
    if (!liveAds) {
        return res
            .status(200)
            .json({
                status: 200,
                message: 'currently no live ads are running'
            })
    }

    return res
        .status(200)
        .json({
            status: 200,
            liveAds,
            message: "live Ads Fetched Succesfully"
        })
})

const handleDeleteAdvertisement = asyncHandler(async (req, res, next) => {
    const advertisementId = req.params._id
    const deletedAdvertisement = await Advertisment.findByIdAndDelete(advertisementId)
    if (!deletedAdvertisement) {
        return res
            .status(500)
            .json({
                status: 500,
                message: 'something went wrong',
            })
    }

    return res
        .status(200)
        .json({
            status: 200,
            message: 'Advertisement Deleted Successfully'
        })

})


const handleLiveAd = asyncHandler(async (req, res, next) => {
    const advertisementId = req.params.id
    const liveAdvertisement = await Advertisment.findByIdAndUpdate(
        advertisementId,
        { live: true, }
    )

    if (!liveAdvertisement) {
        return res
            .status(500)
            .json({
                status: 500,
                message: 'something went wrong',
            })
    }

    return res
        .status(200)
        .json({
            status: 200,
            message: 'Advertisement published Live'
        })
})


export {
    handleCreateAdvertisement,
    handleFetchLiveAds,
    handleDeleteAdvertisement,
    handleLiveAd,
}