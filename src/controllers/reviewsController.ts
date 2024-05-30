import { Request, Response } from 'express';
import { PrismaClient, ListingReview } from '@prisma/client';
const prisma = new PrismaClient();

const listingReviewsController = {
  getAllListingReviews: async (req: Request, res: Response) => {
    try {
      const listingReviews = await prisma.listingReview.findMany({
        where: {
          listingId: req.body.listingId
        }
      });
      if (!listingReviews) {
        return res.status(404).json({ error: "No listing review found"})
      }
      return res.status(200).json(listingReviews);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getUserReviews: async (req: Request, res: Response) => {
    try {
      const listingReviews = await prisma.listingReview.findMany({
        where: {
          userId: req.body.id
        }
      });
      if (!listingReviews) {
        return res.status(404).json({ error: "No User review found"})
      }
      return res.status(200).json(listingReviews);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getListingReviewById: async (req: Request, res: Response) => {
    try {
      const listingReview = await prisma.listingReview.findUnique({
        where: { id: req.body.id },
      });
      if (!listingReview) {
        return res.status(404).json({ error: 'Listing review not found' });
      }
      return res.status(200).json(listingReview);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createListingReview: async (req: Request, res: Response) => {
    try {
      const newListingReview = await prisma.listingReview.create({
        data: req.body
      });
      if (!newListingReview) {
        return res.status(404).json({ error: "Error creating Listing Review"})
      }
      return res.status(201).json(newListingReview);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateListingReview: async (req: Request, res: Response) => {
    try {
      const updatedListingReview = await prisma.listingReview.update({
        where: { id: req.body.id },
        data: req.body
      });
      if (!updatedListingReview) {
        return res.status(404).json({ error: "Listing Review not found" });
      }
      return res.status(200).json(updatedListingReview);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteListingReview: async (req: Request, res: Response) => {
    try {
      const deletedListingReview = await prisma.listingReview.delete({
        where: { id: req.body.id },
      });
      if (!deletedListingReview) {
        return res.status(404).json({ error: "Listing review not found" });
      }
      return res.json(deletedListingReview);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default listingReviewsController;
