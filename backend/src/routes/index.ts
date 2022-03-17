import { Router } from 'express';
import ActivityController from '../controllers/ActivityController';
import User from '../controllers/UserController';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.post('/register', User.store);
router.post('/login', User.login);

router.get('/activity/city', ActivityController.getActivity);
router.get('/activities/last', checkToken, ActivityController.getLastActivitiesByUser);
router.post('/activity/city', checkToken, ActivityController.store);

export default router;