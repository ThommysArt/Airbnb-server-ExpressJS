import { Request, Response } from 'express';
import { PrismaClient, Payment } from '@prisma/client';

const prisma = new PrismaClient();

const paymentsController = {
  getAllUserPayments: async (req: Request, res: Response) => {
    try {
      const payments = await prisma.payment.findMany({
        where: {
          userId: req.body.userId
        }
      });
      if (! payments) {
        return res.status(404).json({ error: "No User Payments found." });
      }
      return res.status(200).json(payments);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getAllListingPayments: async (req: Request, res: Response) => {
    try {
      const payments = await prisma.payment.findMany({
        where: {
          listingId: req.body.listingId
        }
      });
      if (! payments) {
        return res.status(404).json({ error: "No Listing Payments found." });
      }
      return res.status(200).json(payments);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getPaymentById: async (req: Request, res: Response) => {
    try {
      const payment = await prisma.payment.findUnique({
        where: { id: req.body.id },
      });
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      return res.status(200).json(payment);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createPayment: async (req: Request, res: Response) => {
    try {
      const newPayment = await prisma.payment.create({
        data: req.body
      });
      if (!newPayment) {
        return res.status(404).json({ error: "Error creating payment"})
      }
      return res.status(201).json(newPayment);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updatePayment: async (req: Request, res: Response) => {
    try {
      const updatedPayment = await prisma.payment.update({
        where: { id: req.body.id},
        data: req.body
      });
      if (!updatedPayment) {
        return res.status(404).json({ error: "Payment not found" })
      }
      return res.status(200).json(updatedPayment);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deletePayment: async (req: Request, res: Response) => {
    try {
      const deletedPayment = await prisma.payment.delete({
        where: { id: req.body.id },
      });
      if (!deletedPayment) {
        return res.status(404).json({ error: "Payment not found"})
      }
      return res.status(200).json(deletedPayment);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default paymentsController;
