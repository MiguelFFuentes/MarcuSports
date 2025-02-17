import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {Product} from "../../domain/entities/Product";
import {
    PrismaClient,
    Product as PrismaProduct
} from "@prisma/client";
import {getPrismaClient} from "../../../core/PrismaService";

export class PrismaProductCatalogRepository implements ProductCatalogRepository {

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prisma.product.findMany({
            include: {
                parts: {
                    include: {options: true}
                }
            }
        })
        return products.map(fromPrismaProductToDomain)
    }

    async findById(productId: number): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: {id: productId},
            include: {parts: true}
        })
        if (!product) return null
        return fromPrismaProductToDomain(product)
    }
}

export function fromPrismaProductToDomain(product: PrismaProduct): Product {
    return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image || undefined,
        parts: (product as any).parts
    }
}
