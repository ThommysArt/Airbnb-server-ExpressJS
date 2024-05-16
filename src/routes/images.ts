import express from 'express';
import listingImagesController from '../controllers/imagesController';

const router = express.Router();

router.get('/', listingImagesController.getAllListingImages);
router.get('/:id', listingImagesController.getListingImageById);
router.post('/', listingImagesController.createListingImage);
router.put('/:id', listingImagesController.updateListingImage);
router.delete('/:id', listingImagesController.deleteListingImage);

export default router;
