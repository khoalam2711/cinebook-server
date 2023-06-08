import { Router } from 'express';
import { httpHandleLogin } from './auth.controller';
import passport from 'passport';

const router = Router();

router.get('/login', httpHandleLogin);
router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['email', 'profile'],
	})
);

router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/failure',
		successRedirect: '/',
		session: false,
	})
);

export default router;
