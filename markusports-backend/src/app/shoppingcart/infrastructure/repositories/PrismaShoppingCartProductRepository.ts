import {ShoppingCartProductRepository} from "../../domain/repositories/ShoppingCartProductRepository";
import {CartProduct} from "../../domain/entities/CartProduct";
import {Prisma, PrismaClient} from "@prisma/client";
import {PrismaCartProductMapper} from "../mappers/PrismaCartProductMapper";
import {getPrismaClient} from "../../../core/PrismaService";

export class PrismaShoppingCartProductRepository implements ShoppingCartProductRepository {

    private cartProductQuery: Prisma.ProductSelect = {
        parts: {
            include: {
                options: {
                    include: {
                        incompatibleOptions: true,
                        symmetricIncompatibleOptions: true
                    }
                }
            }
        }
    }

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async findProducts(productIds: number[]): Promise<CartProduct[]> {
        const products = await this.prisma.product.findMany({
            where: {
                id: {
                    in: productIds
                }
            },
            include: this.cartProductQuery
        })

        return products.map(product =>
            PrismaCartProductMapper.toDomain(product))
    }

}