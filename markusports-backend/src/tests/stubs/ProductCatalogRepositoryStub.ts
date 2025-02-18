import {ProductCatalogRepository} from "@productcatalog/domain/repositories/ProductCatalogRepository";
import {getMockProducts} from "../helpers/productcatalog/ProductHelper";

export const productCatalogRepository: ProductCatalogRepository = {
    findAll: jest.fn().mockResolvedValue(getMockProducts()),
    findById: jest.fn().mockImplementation((productId: number) => getMockProducts().find(p => p.id === productId)),
}