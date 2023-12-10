import express from 'express';
import { RequestWithUser } from '../middlewares';
import { createOrder, deleteOrder, getAllOrders, getOrder } from '../db/orders';

export const allOrders = async (req: RequestWithUser, res: express.Response) => {
    const { id } = req.user[0];
    const orders = await getAllOrders(Number(id));

    if(orders.length === 0) {
        return res.status(404).json({message: 'No orders found'});
    }

    return res.status(200).json(orders);
}

export const orderCreate = async (req: RequestWithUser, res: express.Response) => {
    const { id } = req.user[0];
    const { productId } = req.body;
    const order = await createOrder(Number(id), productId);

    return res.status(200).json(order == null ? 'Order created' : 'Error creating order');
}

export const order = async (req: RequestWithUser, res: express.Response) => {
    const { orderCode } = req.params;
    const order = await getOrder(orderCode);

    if(order.length === 0) {
        return res.status(404).json({message: 'No order found'});
    }

    return res.status(200).json(order);
}

export const orderDelete = async (req: RequestWithUser, res: express.Response) => {
    const { orderCode } = req.params;
    const order = await getOrder(orderCode);

    if(order.length === 0) {
        return res.status(404).json({message: 'No order found'});
    }

    const deletedOrder = await deleteOrder(orderCode);

    return res.status(200).json(deletedOrder == null ? 'Order deleted' : 'Error deleting order');
}