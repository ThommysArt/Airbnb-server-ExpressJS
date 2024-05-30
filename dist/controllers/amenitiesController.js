"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingAmenitiesController = {
    getAllListingAmenities: async (req, res) => {
        try {
            const listingAmenities = await prisma.listingAmenity.findMany({
                where: {
                    listingId: req.body.listingId,
                }
            });
            if (!listingAmenities) {
                return res.status(404).json({ error: "Listing amenities not found" });
            }
            return res.status(200).json(listingAmenities);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getListingAmenityById: async (req, res) => {
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
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createListingAmenity: async (req, res) => {
        try {
            const newListingAmenity = await prisma.listingAmenity.create({
                data: req.body
            });
            if (!newListingAmenity) {
                return res.status(400).json({ error: "Failed to create listing amenity" });
            }
            return res.status(201).json(newListingAmenity);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    updateListingAmenity: async (req, res) => {
        const listingAmenityId = parseInt(req.params.id);
        try {
            const updatedListingAmenity = await prisma.listingAmenity.update({
                where: { id: listingAmenityId },
                data: req.body
            });
            if (!updatedListingAmenity) {
                return res.status(200).json({ error: "Error updating listing amenity" });
            }
            return res.status(200).json(updatedListingAmenity);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteListingAmenity: async (req, res) => {
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
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = listingAmenitiesController;
