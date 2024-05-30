import express from 'express';
import listingImagesController from '../controllers/imagesController';

const router = express.Router();

router.get('/all', listingImagesController.getAllListingImages);
router.get('/', listingImagesController.getListingImageById);
router.post('/', listingImagesController.createListingImage);
router.put('/', listingImagesController.updateListingImage);
router.delete('/', listingImagesController.deleteListingImage);

export default router;
