import {ShoppingCartProductRepository} from "../../domain/repositories/ShoppingCartProductRepository";
import {CartProduct} from "../../domain/entities/CartProduct";
import {PrismaClient} from "@prisma/client";
import {PrismaCartProductMapper} from "../mappers/PrismaCartProductMapper";
import {getPrismaClient} from "../../../core/PrismaService";
import {PrismaCartProductQuery} from "./PrismaShoppingCartProductQuery";

export class PrismaShoppingCartProductRepository implements ShoppingCartProductRepository {

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async findProducts(productIds: number[]): Promise<CartProduct[]> {
        const products = await this.prisma.product.findMany({
            where: {
                id: {
                    in: productIds
                }
            },
            include: PrismaCartProductQuery
        })

        return products.map(product =>
            PrismaCartProductMapper.toDomain(product))
    }

}