import express from 'express';
import bookingsController from '../controllers/bookingsController';

const router = express.Router();

router.get('/all', bookingsController.getAllUserBookings);
router.get('/', bookingsController.getBookingById);
router.post('/', bookingsController.createBooking);
router.put('/', bookingsController.updateBooking);
router.delete('/', bookingsController.deleteBooking);

export default router;
