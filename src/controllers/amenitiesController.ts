import { Request, Response } from 'express';
import { PrismaClient, ListingAmenity } from '@prisma/client';
const prisma = new PrismaClient();

const listingAmenitiesController = {
  getAllListingAmenities: async (req: Request, res: Response) => {
    try {
      const listingAmenities = await prisma.listingAmenity.findMany();
      res.json(listingAmenities);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getListingAmenityById: async (req: Request, res: Response) => {
    const listingAmenityId = parseInt(req.params.id);
    try {
      const listingAmenity = await prisma.listingAmenity.findUnique({
        where: { id: listingAmenityId },
      });
      if (!listingAmenity) {
        return res.status(404).json({ error: 'Listing amenity not found' });
      }
      res.json(listingAmenity);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createListingAmenity: async (req: Request, res: Response) => {
    const { name, description, listingId } = req.body;
    try {
      const newListingAmenity = await prisma.listingAmenity.create({
        data: {
          name,
          description,
          listingId,
        },
      });
      res.status(201).json(newListingAmenity);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateListingAmenity: async (req: Request, res: Response) => {
    const listingAmenityId = parseInt(req.params.id);
    const { name, description, listingId } = req.body;
    try {
      const updatedListingAmenity = await prisma.listingAmenity.update({
        where: { id: listingAmenityId },
        data: {
          name,
          description,
          listingId,
        },
      });
      res.json(updatedListingAmenity);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteListingAmenity: async (req: Request, res: Response) => {
    const listingAmenityId = parseInt(req.params.id);
    try {
      const deletedListingAmenity = await prisma.listingAmenity.delete({
        where: { id: listingAmenityId },
      });
      res.json(deletedListingAmenity);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default listingAmenitiesController;
