"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const usersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await prisma.user.findMany();
            if (!users) {
                return res.status(404).json({ error: "No users found" });
            }
            return res.status(200).json(users);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id: req.body.id },
            });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await prisma.user.create({
                data: req.body
            });
            if (!newUser) {
                return res.status(404).json({ error: "Error creating user" });
            }
            return res.status(201).json(newUser);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deletedUser = await prisma.user.delete({
                where: { id: req.body.id },
            });
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json(deletedUser);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = usersController;
