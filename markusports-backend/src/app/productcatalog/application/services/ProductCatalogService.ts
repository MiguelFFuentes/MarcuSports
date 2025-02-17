import {ProductDto} from "../dtos/ProductDto";
import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {ProductMapper} from "../mappers/ProductMapper";
import {ProductNotFoundError} from "../../domain/exceptions/ProductNotFoundError";

export class ProductCatalogService {

    constructor(private productCatalogRepository: ProductCatalogRepository) {
    }

    async getProducts(): Promise<ProductDto[]> {
        const products = await this.productCatalogRepository.findAll()
        return ProductMapper.toDtos(products)
    }

    async getProduct(productId: number): Promise<ProductDto> {
        const product = await this.productCatalogRepository.findById(productId)
        if (!product) throw new ProductNotFoundError(productId)
        return ProductMapper.toDto(product)
    }
}