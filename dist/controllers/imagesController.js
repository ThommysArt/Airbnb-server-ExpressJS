"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingImagesController = {
    getAllListingImages: async (req, res) => {
        try {
            const listingImages = await prisma.listingImage.findMany({
                where: {
                    listingId: req.body.listingId
                }
            });
            if (!listingImages) {
                return res.status(404).json({ error: "No listing images found" });
            }
            return res.status(200).json(listingImages);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getListingImageById: async (req, res) => {
        try {
            const listingImage = await prisma.listingImage.findUnique({
                where: { id: req.body.id },
            });
            if (!listingImage) {
                return res.status(404).json({ error: 'Listing image not found' });
            }
            return res.status(200).json(listingImage);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createListingImage: async (req, res) => {
        try {
            const newListingImage = await prisma.listingImage.create({
                data: req.body
            });
            if (!newListingImage) {
                return res.status(404).json({ error: "Failed to create listing image" });
            }
            return res.status(201).json(newListingImage);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    updateListingImage: async (req, res) => {
        try {
            const updatedListingImage = await prisma.listingImage.update({
                where: { id: req.body.id },
                data: req.body
            });
            if (!updatedListingImage) {
                return res.status(404).json({ error: "Listing image not found" });
            }
            return res.status(200).json(updatedListingImage);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteListingImage: async (req, res) => {
        try {
            const deletedListingImage = await prisma.listingImage.delete({
                where: { id: req.body.id },
            });
            if (!deletedListingImage) {
                return res.status(404).json({ error: "Listing image not found" });
            }
            return res.status(200).json(deletedListingImage);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = listingImagesController;
