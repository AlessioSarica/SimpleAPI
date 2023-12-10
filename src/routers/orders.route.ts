import express from 'express';
import { isAuthenticated } from '../middlewares';
import { allOrders, order, orderCreate, orderDelete } from '../controllers/orders';

export default (router: express.Router) => {
    router.get('/orders', isAuthenticated, allOrders);
    router.get('/orders/:orderCode', isAuthenticated, order);
    router.post('/orders/create', isAuthenticated, orderCreate);
    router.delete('/orders/delete/:orderCode', isAuthenticated, orderDelete);
}