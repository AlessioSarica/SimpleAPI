import express from 'express';
import { allProducts, product, productCreate, productDelete } from '../controllers/products';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
    router.use(isAuthenticated);
    router.get('/products', allProducts);
    router.get('/products/:id', product);
    router.post('/products/create', productCreate);
    router.delete('/products/:id', productDelete);
}