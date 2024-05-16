import express from 'express';
import listingsController from '../controllers/listingsController';

const router = express.Router();

router.get('/', listingsController.getAllListings);
router.get('/:id', listingsController.getListingById);
router.post('/', listingsController.createListing);
router.put('/:id', listingsController.updateListing);
router.delete('/:id', listingsController.deleteListing);

export default router;
