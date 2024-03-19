import { Request, Response } from 'express';

export const success = require('./success.json');

exports.response = (_req: Request, res: Response) => {
    res.status(200).send(success);
};
