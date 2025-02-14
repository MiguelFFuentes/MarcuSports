import {Product} from "../../domain/entities/Product";
import {ProductDto} from "../dtos/ProductDto";

export class ProductMapper {
    static toDto(product: Product): ProductDto {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image
        };
    }

    static toDtos(products: Product[]): ProductDto[] {
        return products.map(ProductMapper.toDto);
    }
}