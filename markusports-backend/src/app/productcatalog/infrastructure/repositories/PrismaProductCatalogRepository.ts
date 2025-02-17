import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {Product} from "../../domain/entities/Product";
import {PrismaClient, Product as PrismaProduct} from "@prisma/client";
import {getPrismaClient} from "../../../core/PrismaService";

export class PrismaProductCatalogRepository implements ProductCatalogRepository {

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prisma.product.findMany()
        return products.map(fromPrismaProductToDomain)
    }

    async findById(productId: number): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: {id: productId}
        })
        if (!product) return null
        return fromPrismaProductToDomain(product)
    }
}

export function fromPrismaProductToDomain(prismaProduct: PrismaProduct): Product {
    return {
        id: prismaProduct.id,
        name: prismaProduct.name,
        description: prismaProduct.description,
        price: prismaProduct.price,
        image: prismaProduct.image || undefined,
        parts: []
    }
}
