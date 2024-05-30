"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listingsController = {
    getAllListings: async (req, res) => {
        try {
            const listings = await prisma.listing.findMany();
            if (!listings) {
                return res.status(404).json({ error: "No listings found" });
            }
            return res.status(200).json(listings);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getListingById: async (req, res) => {
        try {
            const listing = await prisma.listing.findUnique({
                where: { id: req.body.id },
            });
            if (!listing) {
                return res.status(404).json({ error: 'Listing not found' });
            }
            return res.status(200).json(listing);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createListing: async (req, res) => {
        try {
            const newListing = await prisma.listing.create({
                data: req.body
            });
            if (!newListing) {
                return res.status(404).json({ error: "Error creating listing" });
            }
            return res.status(201).json(newListing);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    updateListing: async (req, res) => {
        try {
            const updatedListing = await prisma.listing.update({
                where: { id: req.body.id },
                data: req.body
            });
            if (!updatedListing) {
                return res.status(404).json({ error: "Listing not found" });
            }
            return res.status(200).json(updatedListing);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteListing: async (req, res) => {
        try {
            const deletedListing = await prisma.listing.delete({
                where: { id: req.body.id },
            });
            if (!deletedListing) {
                return res.status(404).json({ error: "Listing not found" });
            }
            return res.status(200).json(deletedListing);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = listingsController;
