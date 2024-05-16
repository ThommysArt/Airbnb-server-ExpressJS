import { Request, Response } from 'express';
import { PrismaClient, Booking } from '@prisma/client';
const prisma = new PrismaClient();

const bookingsController = {
  getAllBookings: async (req: Request, res: Response) => {
    try {
      const bookings = await prisma.booking.findMany();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getBookingById: async (req: Request, res: Response) => {
    const bookingId = parseInt(req.params.id);
    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createBooking: async (req: Request, res: Response) => {
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
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateBooking: async (req: Request, res: Response) => {
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
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteBooking: async (req: Request, res: Response) => {
    const bookingId = parseInt(req.params.id);
    try {
      const deletedBooking = await prisma.booking.delete({
        where: { id: bookingId },
      });
      res.json(deletedBooking);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default bookingsController;
