import {Request, Response} from 'express';
import {ProductDto} from "../../application/dtos/ProductDto";
import {ProductCatalogService} from "../../application/services/ProductCatalogService";

export class ProductCatalogController {

    constructor(private productCatalogService: ProductCatalogService) {}

    async getProducts(req: Request, res: Response<ProductDto[]>) {
        const products = await this.productCatalogService.getProducts()
        res.json(products)
    }
}