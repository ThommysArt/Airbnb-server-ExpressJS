import { Request, Response } from 'express';
import { PrismaClient, ListingImage } from '@prisma/client';
const prisma = new PrismaClient();

const listingImagesController = {
  getAllListingImages: async (req: Request, res: Response) => {
    try {
      const listingImages = await prisma.listingImage.findMany();
      res.json(listingImages);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getListingImageById: async (req: Request, res: Response) => {
    const listingImageId = parseInt(req.params.id);
    try {
      const listingImage = await prisma.listingImage.findUnique({
        where: { id: listingImageId },
      });
      if (!listingImage) {
        return res.status(404).json({ error: 'Listing image not found' });
      }
      res.json(listingImage);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createListingImage: async (req: Request, res: Response) => {
    const { listingId, url } = req.body;
    try {
      const newListingImage = await prisma.listingImage.create({
        data: {
          listingId,
          url,
        },
      });
      res.status(201).json(newListingImage);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateListingImage: async (req: Request, res: Response) => {
    const listingImageId = parseInt(req.params.id);
    const { listingId, url } = req.body;
    try {
      const updatedListingImage = await prisma.listingImage.update({
        where: { id: listingImageId },
        data: {
          listingId,
          url,
        },
      });
      res.json(updatedListingImage);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteListingImage: async (req: Request, res: Response) => {
    const listingImageId = parseInt(req.params.id);
    try {
      const deletedListingImage = await prisma.listingImage.delete({
        where: { id: listingImageId },
      });
      res.json(deletedListingImage);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default listingImagesController;
