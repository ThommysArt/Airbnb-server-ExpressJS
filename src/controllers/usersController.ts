import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

const usersController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      if (!users) {
        return res.status(404).json({ error: "No users found"})
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  getUserById: async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.body.id },
      });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const newUser = await prisma.user.create({
        data: req.body
      });
      if (!newUser) {
        return res.status(404).json({ error: "Error creating user"})
      }
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },


  deleteUser: async (req: Request, res: Response) => {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: req.body.id },
      });
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found"})
      }
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' , message: error});
    }
  },
};

export default usersController;
