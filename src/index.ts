import http from 'http';
import express from 'express';
import helmet from 'helmet';
import passport, { Profile } from 'passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import 'dotenv/config';

import AuthRouter from './routes/auth/auth.router';

const PORT = 8000;
const config = {
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRET: process.env.CLIENT_SECRET,
};
function verifyCallback(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
	console.log('Google profile', profile);
	done(null, profile);
}

passport.use(
	new Strategy(
		{
			clientID: config.CLIENT_ID as string,
			clientSecret: config.CLIENT_SECRET as string,
			callbackURL: '/auth/google/callback',
		},
		verifyCallback
	)
);

const app = express();

app.use(helmet());
app.use(passport.initialize());
app.use(express.json());

app.use('/auth', AuthRouter);

http.createServer(app).listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
