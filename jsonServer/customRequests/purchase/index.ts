import { Request, Response } from 'express';

export const success = require('./success.json');
export const failure = require('./failure.json');

exports.response = (_req: Request, res: Response) => {
    console.log(_req.body);
    if (_req.body.color !== '' && _req.body.name !== '' && _req.body.count > 0 && _req.body.cost !== '') {
        res.status(200).send(success);
    } else {
        res.status(500).send(failure);
    }
};
