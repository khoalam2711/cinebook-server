import https from 'https';
import fs from 'fs';
import express from 'express';
import AuthRouter from './routes/auth/auth.router';

const PORT = 3000;
const app = express();

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
