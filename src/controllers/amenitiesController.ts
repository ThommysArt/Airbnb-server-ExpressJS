import { Request, Response } from 'express';
import { PrismaClient, ListingAmenity } from '@prisma/client';
const prisma = new PrismaClient();

const listingAmenitiesController = {
  getAllListingAmenities: async (req: Request, res: Response) => {
    try {
      const listingAmenities = await prisma.listingAmenity.findMany({
        where: {
          listingId: req.body.listingId,
        }
      })
      if (!listingAmenities){
        return res.status(404).json({ error: "Listing amenities not found" })
      }
      return res.status(200).json(listingAmenities);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getListingAmenityById: async (req: Request, res: Response) => {
    try {
      const listingAmenity = await prisma.listingAmenity.findUnique({
        where: { 
          id: req.body.id 
        },
      });
      if (!listingAmenity) {
        return res.status(404).json({ error: 'Listing amenity not found' });
      }
      return res.status(200).json(listingAmenity);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createListingAmenity: async (req: Request, res: Response) => {
    try {
      const newListingAmenity = await prisma.listingAmenity.create({
        data: req.body
      });
      if (!newListingAmenity) {
        return res.status(400).json({ error: "Failed to create listing amenity"})
      }
      return res.status(201).json(newListingAmenity);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateListingAmenity: async (req: Request, res: Response) => {
    const listingAmenityId = parseInt(req.params.id);
    try {
      const updatedListingAmenity = await prisma.listingAmenity.update({
        where: { id: listingAmenityId },
        data: req.body
      });
      if (!updatedListingAmenity) {
        return res.status(200).json({ error: "Error updating listing amenity"})
      }
      return res.status(200).json(updatedListingAmenity);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteListingAmenity: async (req: Request, res: Response) => {
    try {
      const deletedListingAmenity = await prisma.listingAmenity.delete({
        where: { 
          id: req.body.id 
        },
      });
      if (!deletedListingAmenity) {
        return res.status(404).send({ error: "Listing Amenity not found" });
      }
      return res.status(200).json(deletedListingAmenity);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default listingAmenitiesController;
