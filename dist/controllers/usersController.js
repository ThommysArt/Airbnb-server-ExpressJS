"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const usersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    getUserById: async (req, res) => {
        const userId = parseInt(req.params.id);
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    createUser: async (req, res) => {
        const { authCode } = req.body;
        try {
            const newUser = await prisma.user.create({
                data: {
                    authCode: authCode.toString(),
                },
            });
            res.status(201).json(newUser);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
    deleteUser: async (req, res) => {
        const userId = parseInt(req.params.id);
        try {
            const deletedUser = await prisma.user.delete({
                where: { id: userId },
            });
            res.json(deletedUser);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    },
};
exports.default = usersController;
