import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const bookingsController = {
  getAllUserBookings: async (req: Request, res: Response) => {
    try {
      const bookings = await prisma.booking.findMany({
        where: { userId: req.body.userId}
      });
      if (!bookings) {
        return res.status(404).json({ error: "Bookings not found"})
      }
      return res.status(200).json(bookings);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getBookingById: async (req: Request, res: Response) => {
    try {
      const booking = await prisma.booking.findUnique({
        where: { id: req.body.id },
      });
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      return res.status(200).json(booking);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createBooking: async (req: Request, res: Response) => {
    const { listingId, paymentId, checkInDate, checkOutDate } = req.body;
    try {
      const newBooking = await prisma.booking.create({
        data: req.body
      });
      if (!newBooking) {
        return res.status(400).json({ error: "Error creating booking"})
      }
      return res.status(201).json(newBooking);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateBooking: async (req: Request, res: Response) => {
    try {
      const updatedBooking = await prisma.booking.update({
        where: { id: req.body.id },
        data: req.body
      });
      if (!updatedBooking) {
        return res.status(404).json({ error: "Booking not found"})
      }
      return res.status(200).json(updatedBooking);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteBooking: async (req: Request, res: Response) => {
    try {
      const deletedBooking = await prisma.booking.delete({
        where: { id: req.body.id },
      });
      if (!deletedBooking) {
        return res.status(404).json({ error: "Booking not found"})
      }
      return res.status(200).json(deletedBooking);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default bookingsController;
