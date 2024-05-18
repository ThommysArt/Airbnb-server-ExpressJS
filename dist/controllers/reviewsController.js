"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingReviewsController = {
    getAllListingReviews: async (req, res) => {
        try {
            const listingReviews = await prisma.listingReview.findMany();
            res.json(listingReviews);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getListingReviewById: async (req, res) => {
        const listingReviewId = parseInt(req.params.id);
        try {
            const listingReview = await prisma.listingReview.findUnique({
                where: { id: listingReviewId },
            });
            if (!listingReview) {
                return res.status(404).json({ error: 'Listing review not found' });
            }
            res.json(listingReview);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createListingReview: async (req, res) => {
        const { listingId, userId, rating, comment } = req.body;
        try {
            const newListingReview = await prisma.listingReview.create({
                data: {
                    listingId,
                    userId,
                    rating,
                    comment,
                },
            });
            res.status(201).json(newListingReview);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    updateListingReview: async (req, res) => {
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
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteListingReview: async (req, res) => {
        const listingReviewId = parseInt(req.params.id);
        try {
            const deletedListingReview = await prisma.listingReview.delete({
                where: { id: listingReviewId },
            });
            res.json(deletedListingReview);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = listingReviewsController;
