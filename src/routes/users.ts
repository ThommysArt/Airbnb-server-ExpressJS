import express, { Request, Response } from 'express';
import usersController from '../controllers/usersController';

const router = express.Router();

router.get('/all', usersController.getAllUsers);
router.get('/', usersController.getUserById);
router.post('/', usersController.createUser);
router.delete('/', usersController.deleteUser);

export default router;
