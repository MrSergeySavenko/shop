import { Request, Response } from 'express';

export const notebook1 = require('./notebook1.json');
export const notebook2 = require('./notebook2.json');
export const phone1 = require('./phone1.json');
export const phone2 = require('./phone2.json');
export const notepad1 = require('./notepad1.json');
export const notepad2 = require('./notepad2.json');
export const headphone1 = require('./headphone1.json');
export const headphone2 = require('./headphone2.json');

exports.response = (_req: Request, res: Response) => {
    console.log(_req.body);
    // if (_req.body.id === 1) {
    //     return res.status(200).send(notebook1);
    // }
    switch (_req.body.id) {
        case '1':
            res.status(200).send(notebook1);
            break;
        case '2':
            res.status(200).send(notebook2);
            break;
        case '3':
            res.status(200).send(phone1);
            break;
        case '4':
            res.status(200).send(phone2);
            break;
        case '5':
            res.status(200).send(notepad1);
            break;
        case '6':
            res.status(200).send(notepad2);
            break;
        case '7':
            res.status(200).send(headphone1);
            break;
        case '8':
            res.status(200).send(headphone2);
            break;
        default:
            res.status(502).send();
    }
};
