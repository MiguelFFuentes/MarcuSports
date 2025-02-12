import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";
import {Product} from "../../domain/entities/Product";

export class PrismaProductCatalogRepository implements ProductCatalogRepository {
    findAll(): Promise<Product[]> {
        throw new Error("Method not implemented.")
    }
}