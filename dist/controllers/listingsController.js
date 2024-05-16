"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingsController = {
    getAllListings: async (req, res) => {
        try {
            const listings = await prisma.listing.findMany();
            res.json(listings);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getListingById: async (req, res) => {
        const listingId = parseInt(req.params.id);
        try {
            const listing = await prisma.listing.findUnique({
                where: { id: listingId },
            });
            if (!listing) {
                return res.status(404).json({ error: 'Listing not found' });
            }
            res.json(listing);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createListing: async (req, res) => {
        const { title, date, description, location, price, hostId } = req.body;
        try {
            const newListing = await prisma.listing.create({
                data: {
                    title,
                    date,
                    description,
                    location,
                    price,
                    hostId,
                },
            });
            res.status(201).json(newListing);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateListing: async (req, res) => {
        const listingId = parseInt(req.params.id);
        const { title, date, description, location, price, hostId } = req.body;
        try {
            const updatedListing = await prisma.listing.update({
                where: { id: listingId },
                data: {
                    title,
                    date,
                    description,
                    location,
                    price,
                    hostId,
                },
            });
            res.json(updatedListing);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteListing: async (req, res) => {
        const listingId = parseInt(req.params.id);
        try {
            const deletedListing = await prisma.listing.delete({
                where: { id: listingId },
            });
            res.json(deletedListing);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
exports.default = listingsController;
