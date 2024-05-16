import express from 'express';
import listingReviewsController from '../controllers/reviewsController';

const router = express.Router();

router.get('/', listingReviewsController.getAllListingReviews);
router.get('/:id', listingReviewsController.getListingReviewById);
router.post('/', listingReviewsController.createListingReview);
router.put('/:id', listingReviewsController.updateListingReview);
router.delete('/:id', listingReviewsController.deleteListingReview);

export default router;
