import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct } from '../db/products';

export const allProducts = async (req: express.Request, res: express.Response) => {
    const products = await getAllProducts();

    if(products.length === 0) {
        return res.status(404).json({message: 'Products not found'});
    }

    res.status(200).json(products);
}

export const product = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const product = await getProduct(id);

    if(product.length === 0) {
        return res.status(404).json({message: 'Product not found'});
    }

    res.status(200).json(product);
}

export const productCreate = async (req: express.Request, res: express.Response) => {
    const { name, quantity, description, price } = req.body;
    const product = await createProduct(name, quantity, description, price);

    res.status(200).json(product == null ? 'Product created' : 'Internal Database Error');
}

export const productDelete = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const product = await deleteProduct(id);

    res.status(200).json(product == null ? 'Product deleted' : 'Internal Database Error');
}