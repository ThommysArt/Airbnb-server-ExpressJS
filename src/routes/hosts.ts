import express from 'express';
import hostsController from '../controllers/hostsController';

const router = express.Router();

router.get('/all', hostsController.getAllHosts);
router.get('/', hostsController.getHostById);
router.post('/', hostsController.createHost);
router.put('/', hostsController.updateHost);
router.delete('/', hostsController.deleteHost);

export default router;
