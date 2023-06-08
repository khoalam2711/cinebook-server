import https from 'https';
import fs from 'fs';
import express from 'express';
import helmet from 'helmet';
import 'dotenv/config'

import AuthRouter from './routes/auth/auth.router';

const PORT = 8000;
const config = {
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/auth', AuthRouter);

https
	.createServer(
		{
			cert: fs.readFileSync('cert.pem'),
			key: fs.readFileSync('key.pem'),
		},
		app
	)
	.listen(PORT, () => {
		console.log(`Listening on port ${PORT}...`);
	});
