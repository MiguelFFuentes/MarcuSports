import {ProductPart} from "../../domain/entities/ProductPart";
import {ProductPartDto} from "../dtos/ProductPartDto";
import {ProductPartOptionMapper} from "./ProductPartOptionMapper";

export class ProductPartMapper {
    static toDto(part: ProductPart): ProductPartDto {
        return {
            id: part.id,
            name: part.name,
            options: ProductPartOptionMapper.toDtos(part.options)
        }
    }

    static toDtos(parts: ProductPart[]): ProductPartDto[] {
        return parts.map(ProductPartMapper.toDto)
    }
}