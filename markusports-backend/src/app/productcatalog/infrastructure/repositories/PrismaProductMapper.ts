import {Product} from "../../domain/entities/Product"
import {Product as PrismaProduct} from "@prisma/client"

export class PrismaProductMapper {
    static toDomain(product: PrismaProduct): Product {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image || undefined,
            parts: (product as any).parts.map((part: any) => ({
                id: part.id,
                name: part.name,
                options: part.options.map((option: any) => ({
                    id: option.id,
                    name: option.name,
                    stock: option.stock,
                    // Two-way binding Prisma. This is a workaround for Prisma's lack of support for many-to-many self relationships.
                    incompatibleOptions: [...option.incompatibleOptions, ...option.symmetricIncompatibleOptions]
                }))
            }))
        }
    }
}
