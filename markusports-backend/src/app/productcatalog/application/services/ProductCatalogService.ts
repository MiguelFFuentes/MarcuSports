import {ProductDto} from "../dtos/ProductDto";
import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {ProductMapper} from "../mappers/ProductMapper";

export class ProductCatalogService {

    constructor(private productCatalogRepository: ProductCatalogRepository) {}

    async getProducts(): Promise<ProductDto[]> {
        const products = await this.productCatalogRepository.findAll()
        return ProductMapper.toDtos(products)
    }

    async getProduct(productId: string): Promise<ProductDto> {
        throw new Error('Method not implemented')
    }
}