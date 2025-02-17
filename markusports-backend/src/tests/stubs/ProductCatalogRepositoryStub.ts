import {ProductCatalogRepository} from "@productcatalog/domain/repositories/ProductCatalogRepository";
import {getMockProductDtos} from "../helpers/ProductDtoHelper";
import {getMockProducts} from "../helpers/ProductHelper";

export const productCatalogRepository: ProductCatalogRepository = {
    findAll: jest.fn().mockResolvedValue(getMockProducts()),
    findById: jest.fn().mockImplementation((productId: number) => getMockProducts().find(p => p.id === productId)),
}