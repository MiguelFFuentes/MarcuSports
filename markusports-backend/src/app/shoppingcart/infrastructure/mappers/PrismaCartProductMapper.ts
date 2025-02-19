import {CartProduct} from "../../domain/entities/CartProduct";
import {Product as PrismaProduct, ProductPartOption as PrismaSelectedOption} from "@prisma/client";
import {CartPartId} from "../../domain/valueobjects/CartPartId";
import {CartOption} from "../../domain/entities/CartOption";

export class PrismaCartProductMapper {
    static toDomain(product: PrismaProduct, selectedOptions: PrismaSelectedOption[] = []): CartProduct {
        const parts = (product as any).parts as any[]

        const partIds: CartPartId[] = parts.map(part => ({id: part.id}))
        const options: CartOption[] = parts.flatMap(part => part.options)
            .map(option => ({
                id: option.id,
                name: option.name,
                stock: option.stock,
                incompatibleOptions: [...option.incompatibleOptions, ...option.symmetricIncompatibleOptions],
                partId: option.partId
            }))
        return new CartProduct(
            product.id,
            product.name,
            product.description,
            product.price,
            options,
            selectedOptions.map((option: any) => ({
                id: option.id,
                name: option.name,
                stock: option.stock,
                incompatibleOptions: [...option.incompatibleOptions, ...option.symmetricIncompatibleOptions],
                partId: option.partId
            })),
            partIds,
            product.image || undefined
        )
    }
}