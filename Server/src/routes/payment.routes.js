import { Router } from "express"
import { authenticateSeller } from '../middlewares/authentication.js'
import { AuthorizedSeller } from '../middlewares/authorization.js'
import {
       handleGenerateOrderId,
       handleValidateAndSaveTransaction,
       handleFailedTransaction,
       } from '../controllers/payment.controller.js'


const paymentRoutes = Router();

paymentRoutes.post('/create-order' , authenticateSeller ,  handleGenerateOrderId)
paymentRoutes.post('/validate-transaction' , authenticateSeller , handleValidateAndSaveTransaction)
paymentRoutes.post('/failed-transaction' , handleFailedTransaction)
// callback helper route for razorpay checkout redirection
paymentRoutes.post("/payment/payment-success", (req, res) => {
  res.redirect("http://localhost:5173/payment-success");
})


export default paymentRoutes