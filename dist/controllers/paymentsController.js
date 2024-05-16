"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const paymentsController = {
    getAllPayments: async (req, res) => {
        try {
            const payments = await prisma.payment.findMany();
            res.json(payments);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getPaymentById: async (req, res) => {
        const paymentId = parseInt(req.params.id);
        try {
            const payment = await prisma.payment.findUnique({
                where: { id: paymentId },
            });
            if (!payment) {
                return res.status(404).json({ error: 'Payment not found' });
            }
            res.json(payment);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createPayment: async (req, res) => {
        const { userId, listingId, date, method } = req.body;
        try {
            const newPayment = await prisma.payment.create({
                data: {
                    userId,
                    listingId,
                    date,
                    method,
                },
            });
            res.status(201).json(newPayment);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updatePayment: async (req, res) => {
        const paymentId = parseInt(req.params.id);
        const { userId, listingId, date, method } = req.body;
        try {
            const updatedPayment = await prisma.payment.update({
                where: { id: paymentId },
                data: {
                    userId,
                    listingId,
                    date,
                    method,
                },
            });
            res.json(updatedPayment);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deletePayment: async (req, res) => {
        const paymentId = parseInt(req.params.id);
        try {
            const deletedPayment = await prisma.payment.delete({
                where: { id: paymentId },
            });
            res.json(deletedPayment);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
exports.default = paymentsController;
