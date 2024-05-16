import express from 'express';
import listingAmenitiesController from '../controllers/amenitiesController';

const router = express.Router();

router.get('/', listingAmenitiesController.getAllListingAmenities);
router.get('/:id', listingAmenitiesController.getListingAmenityById);
router.post('/', listingAmenitiesController.createListingAmenity);
router.put('/:id', listingAmenitiesController.updateListingAmenity);
router.delete('/:id', listingAmenitiesController.deleteListingAmenity);

export default router;
