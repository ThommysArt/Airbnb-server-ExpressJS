import express from 'express';
import listingsController from '../controllers/listingsController';

const router = express.Router();

router.get('/all', listingsController.getAllListings);
router.get('/', listingsController.getListingById);
router.post('/', listingsController.createListing);
router.put('/', listingsController.updateListing);
router.delete('/', listingsController.deleteListing);

export default router;
