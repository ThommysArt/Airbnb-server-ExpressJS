"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const hostsController = {
    getAllHosts: async (req, res) => {
        try {
            const hosts = await prisma.host.findMany();
            res.json(hosts);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getHostById: async (req, res) => {
        const hostId = parseInt(req.params.id);
        try {
            const host = await prisma.host.findUnique({
                where: { id: hostId },
            });
            if (!host) {
                return res.status(404).json({ error: 'Host not found' });
            }
            res.json(host);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createHost: async (req, res) => {
        const { userId } = req.body;
        try {
            const newHost = await prisma.host.create({
                data: {
                    userId,
                },
            });
            res.status(201).json(newHost);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateHost: async (req, res) => {
        const hostId = parseInt(req.params.id);
        const { userId } = req.body;
        try {
            const updatedHost = await prisma.host.update({
                where: { id: hostId },
                data: {
                    userId,
                },
            });
            res.json(updatedHost);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteHost: async (req, res) => {
        const hostId = parseInt(req.params.id);
        try {
            const deletedHost = await prisma.host.delete({
                where: { id: hostId },
            });
            res.json(deletedHost);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
exports.default = hostsController;
