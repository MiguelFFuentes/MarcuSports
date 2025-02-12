import {ProductDto} from "../dtos/ProductDto";

export class ProductCatalogService {
    async getProducts(): Promise<ProductDto[]> {
        throw new Error('Not implemented')
    }
}