import { Router } from "express"
import { authenticateSeller } from '../middlewares/authentication.js'
import { AuthorizedSeller } from '../middlewares/authorization.js'
import {
       handleGenerateOrderId,
       handleValidateAndSaveTransaction,
       handleFailedTransaction,
       } from '../controllers/payment.controller.js'


const paymentRoutes = Router();

paymentRoutes.post('/create-order' , handleGenerateOrderId)
paymentRoutes.post('/validate-transaction' , handleValidateAndSaveTransaction)
paymentRoutes.post('/failed-transaction' , handleFailedTransaction)



export default paymentRoutes