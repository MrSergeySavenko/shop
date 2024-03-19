import { Request, Response } from 'express';
import { Config } from './mockConfig';

interface ICustomRequestMeta {
    pattern: string;
    scriptPath: string;
}

const path = require('path');
const pause = require('connect-pause');
const jsonServer = require('json-server');

const routes = require(path.join(__dirname, Config.routesFile));
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, Config.dbFile));

const middleware = jsonServer.defaults({ bodyParser: true });
server.use(middleware);

server.use(pause(Config.delay));

routes.customRoutes.forEach(({ pattern, scriptPath }: ICustomRequestMeta) => {
    const script = require(path.join(__dirname, `/customRequests${scriptPath}`));

    if (script && script.response) {
        server.all(pattern, (req: Request, res: Response) => {
            script.response(req, res);
        });
    } else {
        console.error('Файл по указанному пути не существует или не имеет экспортированного метода response');
    }
});

server.use(jsonServer.rewriter(routes.dbRoutes));

server.use(router);

server.listen(Config.port, () => {
    console.log('JSON Server запущен на порту ', Config.port);
});
