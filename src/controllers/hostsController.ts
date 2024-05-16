import { Request, Response } from 'express';
import { PrismaClient, Host } from '@prisma/client';
const prisma = new PrismaClient();

const hostsController = {
  getAllHosts: async (req: Request, res: Response) => {
    try {
      const hosts = await prisma.host.findMany();
      res.json(hosts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getHostById: async (req: Request, res: Response) => {
    const hostId = parseInt(req.params.id);
    try {
      const host = await prisma.host.findUnique({
        where: { id: hostId },
      });
      if (!host) {
        return res.status(404).json({ error: 'Host not found' });
      }
      res.json(host);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createHost: async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
      const newHost = await prisma.host.create({
        data: {
          userId,
        },
      });
      res.status(201).json(newHost);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateHost: async (req: Request, res: Response) => {
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
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteHost: async (req: Request, res: Response) => {
    const hostId = parseInt(req.params.id);
    try {
      const deletedHost = await prisma.host.delete({
        where: { id: hostId },
      });
      res.json(deletedHost);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default hostsController;
