import { Router } from 'express';
import ActivityController from '../controllers/AcitivityController';
import User from '../controllers/UserController';

const router = Router();

router.post('/register', User.store);
router.post('/login', User.login);
router.post('/city', ActivityController.store);

export default router;