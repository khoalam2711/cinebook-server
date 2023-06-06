import { RequestHandler } from 'express';

export const httpHandleLogin: RequestHandler = (req, res, next) => {
	res.status(200).send('Auth success');
};
