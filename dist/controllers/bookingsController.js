"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const bookingsController = {
    getAllBookings: async (req, res) => {
        try {
            const bookings = await prisma.booking.findMany();
            res.json(bookings);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getBookingById: async (req, res) => {
        const bookingId = parseInt(req.params.id);
        try {
            const booking = await prisma.booking.findUnique({
                where: { id: bookingId },
            });
            if (!booking) {
                return res.status(404).json({ error: 'Booking not found' });
            }
            res.json(booking);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createBooking: async (req, res) => {
        const { listingId, paymentId, checkInDate, checkOutDate } = req.body;
        try {
            const newBooking = await prisma.booking.create({
                data: {
                    listingId,
                    paymentId,
                    checkInDate,
                    checkOutDate,
                },
            });
            res.status(201).json(newBooking);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateBooking: async (req, res) => {
        const bookingId = parseInt(req.params.id);
        const { listingId, paymentId, checkInDate, checkOutDate } = req.body;
        try {
            const updatedBooking = await prisma.booking.update({
                where: { id: bookingId },
                data: {
                    listingId,
                    paymentId,
                    checkInDate,
                    checkOutDate,
                },
            });
            res.json(updatedBooking);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteBooking: async (req, res) => {
        const bookingId = parseInt(req.params.id);
        try {
            const deletedBooking = await prisma.booking.delete({
                where: { id: bookingId },
            });
            res.json(deletedBooking);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
exports.default = bookingsController;
