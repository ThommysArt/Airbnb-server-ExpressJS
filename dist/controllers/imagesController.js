"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingImagesController = {
    getAllListingImages: async (req, res) => {
        try {
            const listingImages = await prisma.listingImage.findMany();
            res.json(listingImages);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getListingImageById: async (req, res) => {
        const listingImageId = parseInt(req.params.id);
        try {
            const listingImage = await prisma.listingImage.findUnique({
                where: { id: listingImageId },
            });
            if (!listingImage) {
                return res.status(404).json({ error: 'Listing image not found' });
            }
            res.json(listingImage);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createListingImage: async (req, res) => {
        const { listingId, url } = req.body;
        try {
            const newListingImage = await prisma.listingImage.create({
                data: {
                    listingId,
                    url,
                },
            });
            res.status(201).json(newListingImage);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    updateListingImage: async (req, res) => {
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
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteListingImage: async (req, res) => {
        const listingImageId = parseInt(req.params.id);
        try {
            const deletedListingImage = await prisma.listingImage.delete({
                where: { id: listingImageId },
            });
            res.json(deletedListingImage);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = listingImagesController;
