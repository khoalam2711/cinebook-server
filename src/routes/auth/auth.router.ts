import { Router } from 'express';
import { httpHandleLogin } from './auth.controller';

const router = Router();

router.get('/login', httpHandleLogin);

export default router;
