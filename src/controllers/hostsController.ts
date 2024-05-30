import { Request, Response } from 'express';
import { PrismaClient, Host } from '@prisma/client';

const prisma = new PrismaClient();

const hostsController = {
  getAllHosts: async (req: Request, res: Response) => {
    try {
      const hosts = await prisma.host.findMany();
      if (!hosts) {
        return res.status(404).json({ error: "No hosts found"})
      }
      return res.status(200).json(hosts);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getHostById: async (req: Request, res: Response) => {
    try {
      const host = await prisma.host.findUnique({
        where: { id: req.body.id },
      });
      if (!host) {
        return res.status(404).json({ error: 'Host not found' });
      }
      return res.status(200).json(host);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createHost: async (req: Request, res: Response) => {
    try {
      const newHost = await prisma.host.create({
        data: {
          userId: req.body.userId
        },
      });
      if (!newHost) {
        return res.status(400).json({ error: "Failed to create host" });
      }
      return res.status(201).json(newHost);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  updateHost: async (req: Request, res: Response) => {
    try {
      const updatedHost = await prisma.host.update({
        where: { id: req.body.id },
        data: {
          userId: req.body.userId,
        },
      });
      if (!updatedHost) {
        return res.status(404).json({ error: "Host not found" });
      }
      return res.status(200).json(updatedHost);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  deleteHost: async (req: Request, res: Response) => {
    try {
      const deletedHost = await prisma.host.delete({
        where: { id: req.body.id },
      });
      if (!deletedHost) {
        return res.status(404).json({ error: "Host not found" });
      }
      return res.status(200).json(deletedHost);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default hostsController;
