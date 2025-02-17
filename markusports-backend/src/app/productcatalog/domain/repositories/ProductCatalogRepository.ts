import {Product} from "../entities/Product";

export interface ProductCatalogRepository {
    findAll(): Promise<Product[]>

    findById(id: number): Promise<Product | null>
}