import { Router } from 'express';
import historyController from '../controllers/historyController';

const router = Router();

router.get('/:id', historyController.getListHistoryUser);
router.post('/:id', historyController.createHistoryUser);

export default router;

