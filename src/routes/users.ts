import express, { Request, Response } from 'express';
import usersController from '../controllers/usersController';

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.delete('/:id', usersController.deleteUser);

export default router;
