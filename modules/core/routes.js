import express from 'express';
import { routerMap } from './utils';
import { CoreController } from './controller';

const routes = express.Router();

routes.get('/',
    routerMap(CoreController.landing)
);

export default routes;