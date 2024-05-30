import express from 'express';
import listingReviewsController from '../controllers/reviewsController';

const router = express.Router();

router.get('/all/', listingReviewsController.getAllListingReviews);
router.get('/user', listingReviewsController.getUserReviews);
router.get('/', listingReviewsController.getListingReviewById);
router.post('/', listingReviewsController.createListingReview);
router.put('/', listingReviewsController.updateListingReview);
router.delete('/', listingReviewsController.deleteListingReview);

export default router;
