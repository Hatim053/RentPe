import asyncHandler from "../utilities/asyncHandler.js"
import Razorpay from 'razorpay'
import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'
import { json } from "stream/consumers"
import Payment from "../models/payment.model.js"

// controller for creating an order
//[is route per frontend se request karke order id get karna he then frontend se transation initiate karna he]
const handleGenerateOrderId = asyncHandler(async function(req , res) {
var instance = new Razorpay({ key_id: process.env.RAZORPAY_API_KEY , key_secret: process.env.RAZORPAY_API_SECRET })
const { amount , currency } = req.body
var options = {
  amount,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency,
  receipt: uuidv4()
};
 await instance.orders.create(options, function(err, order) {
  console.log(order.id);
  return res
  .status(200)
  .json(order)
});



})


// controller for validating the transaction and saving the transaction to data base and updating the seller as subscribed seller
// [after transation is route per request karna h transaction validate karne ke liye and save karne ke liye]
const handleValidateAndSaveTransaction = asyncHandler(async (req , res) => {

 console.log("Headers:", req.headers);
console.log("Body type:", typeof req.body);
console.log("Raw body:", req.body);

const { razorpay_payment_id , razorpay_order_id , razorpay_signature , amount } = req.body

const sha = crypto.createHmac('sha256' , process.env.RAZORPAY_API_SECRET)

sha.update(`${razorpay_order_id}|${razorpay_payment_id}`)

const digest = sha.digest('hex')

let status;
if(digest != razorpay_signature) status = 'pending'
else status = 'success'

const payment = await Payment.create({
  // sellerId : req.seller._id,
  status,
  amount : amount / 100,
  paymentId : razorpay_payment_id,
  transactionDate : new Date().toLocaleDateString()
})

if(payment) console.log(payment)
else console.log('document not formed')
if(digest != razorpay_signature) console.log('payment marked as pending')
  else console.log('payment marked as success')

return res
.status(201)
.json({
  message : 'transaction recorded succesfully in the database'
})

})




const handleFailedTransaction = asyncHandler(async (req , res) => {
  const { razorpay_payment_id , amount } = req.body
  const payment = await Payment.create({
  // sellerId : req.seller._id,
  status  : 'failed',
  amount : amount / 100,
  paymentId : razorpay_payment_id,
  transactionDate : new Date().toLocaleDateString()
})


if(payment) console.log(payment)
  else console.log('document not formed')

return res
.status(201)
.json({
  message : 'failed transaction recorded in the data base',
}) // replace this with the page showing transaction details

})


export  {
    handleGenerateOrderId,
    handleValidateAndSaveTransaction,
    handleFailedTransaction,
}