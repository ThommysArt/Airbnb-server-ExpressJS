import express from 'express';
import listingAmenitiesController from '../controllers/amenitiesController';

const router = express.Router();

router.get('/all', listingAmenitiesController.getAllListingAmenities);
router.get('/', listingAmenitiesController.getListingAmenityById);
router.post('/', listingAmenitiesController.createListingAmenity);
router.put('/', listingAmenitiesController.updateListingAmenity);
router.delete('/', listingAmenitiesController.deleteListingAmenity);

export default router;
