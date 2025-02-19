import {Request, Response, NextFunction} from 'express';
import {ProductDto} from "../../application/dtos/ProductDto";
import {ProductCatalogService} from "../../application/services/ProductCatalogService";
import {ProductNotFoundError} from "../../domain/exceptions/ProductNotFoundError";

export class ProductCatalogController {

    constructor(private productCatalogService: ProductCatalogService) {}

    async getProducts(req: Request, res: Response<ProductDto[]>, next: NextFunction) {
        try {
            const products = await this.productCatalogService.getProducts()
            res.json(products)
        } catch (error) {
            console.error('Error in GET /products:', error)
            next(error)
        }
    }

    async getProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const productId = parseInt(req.params.id)
            const product = await this.productCatalogService.getProduct(productId)
            res.json(product)
        } catch (error) {
            if (error instanceof ProductNotFoundError) {
                res.status(404).json({error: error.message})
                return
            }
            console.error('Error in GET /products/:id:', error)
            next(error)
        }
    }
}