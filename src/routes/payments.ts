import express from 'express';
import paymentsController from '../controllers/paymentsController';

const router = express.Router();

router.get('/by-user', paymentsController.getAllUserPayments);
router.get('/by-listing', paymentsController.getAllListingPayments);
router.get('/', paymentsController.getPaymentById);
router.post('/', paymentsController.createPayment);
router.put('/', paymentsController.updatePayment);
router.delete('/', paymentsController.deletePayment);

export default router;
