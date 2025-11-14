import mongoose from "mongoose"

const advertisementSchema = new mongoose.Schema({
    sellerId: { // so that user can directly chat with the seller
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
    },
    serviceType: {
        type: String,
        enum: ['furniture', 'properties & spaces', 'electronics & applainces', , 'catering  & serving', 'lighting & decoration' , 'services'],
        default : 'services',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    city: { // where service will be provided
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        default: [],
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    },
    live: {
        type: Boolean,
        default: false,
    }

}, { timestamps: true })

const Advertisement = mongoose.model('Advertisement', advertisementSchema)

export default Advertisement