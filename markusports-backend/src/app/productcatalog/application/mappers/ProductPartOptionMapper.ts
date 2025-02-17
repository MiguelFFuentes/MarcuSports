import {ProductPartOption} from "../../domain/entities/ProductPartOption";
import {ProductPartOptionDto} from "../dtos/ProductPartOptionDto";

export class ProductPartOptionMapper {
    static toDto(option: ProductPartOption): ProductPartOptionDto {
        return {
            id: option.id,
            name: option.name,
            stock: option.stock,
            incompatibleOptions: option.incompatibleOptions.map(option => option.id)
        }
    }

    static toDtos(options: ProductPartOption[]): ProductPartOptionDto[] {
        return options.map(ProductPartOptionMapper.toDto)
    }
}