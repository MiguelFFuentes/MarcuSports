import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {Product} from "../../domain/entities/Product";
import {
    PrismaClient,
} from "@prisma/client";
import {getPrismaClient} from "../../../core/PrismaService";
import {PrismaProductMapper} from "./PrismaProductMapper";

export class PrismaProductCatalogRepository implements ProductCatalogRepository {

    private productQuery ={
        parts: {
            include: {
                options: {
                    include: {
                        incompatibleOptions: true,
                        symmetricIncompatibleOptions: true
                    }
                }
            }
        },
    }

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prisma.product.findMany({include: this.productQuery})
        return products.map(PrismaProductMapper.toDomain)
    }

    async findById(productId: number): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: {id: productId},
            include: this.productQuery
        })
        if (!product) return null
        return PrismaProductMapper.toDomain(product)
    }
}
