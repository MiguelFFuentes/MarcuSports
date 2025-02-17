import {Product} from "../../domain/entities/Product";
import {ProductDto} from "../dtos/ProductDto";
import {ProductPartMapper} from "./ProductPartMapper";

export class ProductMapper {
    static toDto(product: Product): ProductDto {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            parts: ProductPartMapper.toDtos(product.parts)
        };
    }

    static toDtos(products: Product[]): ProductDto[] {
        return products.map(ProductMapper.toDto);
    }
}