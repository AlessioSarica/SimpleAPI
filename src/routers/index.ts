import express from 'express';
import authenticationRoute from './authentication.route';
import productRoute from './product.route';
import ordersRoute from './orders.route';

const router = express.Router();

export default () => {
    authenticationRoute(router);
    productRoute(router);
    ordersRoute(router);

    return router;
}