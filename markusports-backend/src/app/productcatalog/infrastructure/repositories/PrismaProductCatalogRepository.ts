import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {Product} from "../../domain/entities/Product";
import {PrismaClient,} from "@prisma/client";
import {getPrismaClient} from "../../../core/PrismaService";
import {PrismaProductMapper} from "../mappers/PrismaProductMapper";
import {PrismaProductQuery} from "./PrismaProductQuery";

export class PrismaProductCatalogRepository implements ProductCatalogRepository {

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prisma.product.findMany({include: PrismaProductQuery})
        return products.map(PrismaProductMapper.toDomain)
    }

    async findById(productId: number): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: {id: productId},
            include: PrismaProductQuery
        })
        if (!product) return null
        return PrismaProductMapper.toDomain(product)
    }
}
