import express from 'express';
import hostsController from '../controllers/hostsController';

const router = express.Router();

router.get('/', hostsController.getAllHosts);
router.get('/:id', hostsController.getHostById);
router.post('/', hostsController.createHost);
router.put('/:id', hostsController.updateHost);
router.delete('/:id', hostsController.deleteHost);

export default router;
