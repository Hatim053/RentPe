import asyncHandler from '../utilities/asyncHandler.js'
import apiError from '../utilities/apiError.js'
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import uploadOnCloudinary from '../utilities/cloudinary.js'

const options = {
    httpOnly: true,
    secure: true,
}

const generateAccessAndRefreshToken = async (user) => {
    const refreshToken = user.generateRefreshToken()
    const accessToken = user.generateAccessToken()
    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    return { refreshToken, accessToken }
}

const handleUserLogin = asyncHandler(async (req, res, next) => {
    // login details = email , password

    const { email, password } = req.body
    if (!email) {
        throw new apiError(401, 'email required')
    }
    const user = await User.findOne({ email: email })

    if (!user) {
        throw new apiError(404, 'user doesnt exist')
    }

    if (!password) {
        throw new apiError(404, 'password required')
    }
    const validatePassword = await user.isPasswordCorrect(password)

    if (!validatePassword) {
        throw new apiError(401, 'wrong password entered')
    }

    const { refreshToken, accessToken } = await generateAccessAndRefreshToken(user)
    const updatedUser = await User.findById(createdUser._id).select(
        "-password -refreshToken"
    )

    if (!updatedUser) {
        throw new apiError(500, 'something went wrong')
    }
    return res
        .status(200)
        .cookie('refreshToken', refreshToken, options)
        .cookie('accessToken', accessToken, options)
        .json({
            status: 201,
            user: updatedUser,
            message: 'logedin successfully'
        })
})



const handleUserSignup = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        throw new apiError(401, 'All the fields are required')
    }
    const existedUser = await User.findOne({
        $or: [{ email: email }, { username: username }]
    })

    if (existedUser) {
        throw new apiError(400, 'user already exist')
    }
    const createdUser = await User.create({
        username,
        email,
        password,
    })
    const user = await User.findById(createdUser._id).select(
        "-password -refreshToken"
    )
    if (!user) {
        throw new apiError(500, 'something went wrong')
    }
    return res
        .status(201)
        .json({
            status: 201,
            user: user,
            message: 'user registered succesfully'
        }
        )
})


const refreshAccessToken = asyncHandler(async (req, res, next) => {
    const incomingRefreshToken = req.cookie?.refrehToken
    if (!incomingRefreshToken) {
        return res.json({ error: 'no refresh token in the cookies' })
    }
    const decodedRefreshToken = jwt.verify(incomingRefreshToken, process.env.REFRESHTOKENSECRET)
    if (!decodedRefreshToken) {
        return res.json({ error: 'invalid refresh token' })
    }
    const user = await User.findById({ _id: refreshAccessToken._id })
    if (!user) {
        return res.json({ error: 'no user exist with the refresh token' })
    }
    const userRefreshToken = user.refreshToken
    if (!incomingRefreshToken == userRefreshToken) {
        return res.json({ error: 'refresh tokens not matched' })
    }
    const { refrehToken, accessToken } = await generateAccessAndRefreshToken(user)
    return res
        .status(201)
        .cookie('refreshToken', refrehToken)
        .cookie('accesToken', accessToken)
        .json({ message: 'tokens refreshed succesfully' })
})



const handlerUserLogout = asyncHandler(async (req, res, next) => {
    const userId = req.seller?._id
    const user = await User.findByIdAndUpdate(
        userId,
        { $set: { refreshToken: 1 } },
        { new: true }
    )

    return res
        .clearCookie('refreshToken')
        .clearCookie('accessToken')
        .status(200)
        .json({
            status: 200,
            message: 'seller logout succesfull'
        })
})

const uploadProfileImage = asyncHandler(async (req, res, next) => {
    const profileImageLocalPath = req.file.path
    const image = await uploadOnCloudinary(profileImageLocalPath)
    if (!image) {
        return res.json({
            status: 500,
            message: 'upload on cloudinary failed',
        })
    }
    const user = await User.findByIdAndUpdate(
        { _id: req.user._id },
        { $set: { profileImage: image.url } },
        { new: true }
    )

    return res
        .status(200)
        .json({
            status: 200,
            message: 'profileImage uploaded successfully',
        })
})




export { handleUserLogin, handleUserSignup, uploadProfileImage }