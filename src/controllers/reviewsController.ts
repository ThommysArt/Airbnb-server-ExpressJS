import { Request, Response } from 'express';
import { PrismaClient, ListingReview } from '@prisma/client';
const prisma = new PrismaClient();

const listingReviewsController = {
  getAllListingReviews: async (req: Request, res: Response) => {
    try {
      const listingReviews = await prisma.listingReview.findMany();
      res.json(listingReviews);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getListingReviewById: async (req: Request, res: Response) => {
    const listingReviewId = parseInt(req.params.id);
    try {
      const listingReview = await prisma.listingReview.findUnique({
        where: { id: listingReviewId },
      });
      if (!listingReview) {
        return res.status(404).json({ error: 'Listing review not found' });
      }
      res.json(listingReview);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createListingReview: async (req: Request, res: Response) => {
    const { listingId, rating, comment } = req.body;
    try {
      const newListingReview = await prisma.listingReview.create({
        data: {
          listingId,
          rating,
          comment,
        },
      });
      res.status(201).json(newListingReview);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateListingReview: async (req: Request, res: Response) => {
    const listingReviewId = parseInt(req.params.id);
    const { listingId, rating, comment } = req.body;
    try {
      const updatedListingReview = await prisma.listingReview.update({
        where: { id: listingReviewId },
        data: {
          listingId,
          rating,
          comment,
        },
      });
      res.json(updatedListingReview);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteListingReview: async (req: Request, res: Response) => {
    const listingReviewId = parseInt(req.params.id);
    try {
      const deletedListingReview = await prisma.listingReview.delete({
        where: { id: listingReviewId },
      });
      res.json(deletedListingReview);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default listingReviewsController;
