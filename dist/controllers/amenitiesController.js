"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingAmenitiesController = {
    getAllListingAmenities: async (req, res) => {
        try {
            const listingAmenities = await prisma.listingAmenity.findMany();
            res.json(listingAmenities);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getListingAmenityById: async (req, res) => {
        const listingAmenityId = parseInt(req.params.id);
        try {
            const listingAmenity = await prisma.listingAmenity.findUnique({
                where: { id: listingAmenityId },
            });
            if (!listingAmenity) {
                return res.status(404).json({ error: 'Listing amenity not found' });
            }
            res.json(listingAmenity);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createListingAmenity: async (req, res) => {
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
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateListingAmenity: async (req, res) => {
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
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteListingAmenity: async (req, res) => {
        const listingAmenityId = parseInt(req.params.id);
        try {
            const deletedListingAmenity = await prisma.listingAmenity.delete({
                where: { id: listingAmenityId },
            });
            res.json(deletedListingAmenity);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
exports.default = listingAmenitiesController;
