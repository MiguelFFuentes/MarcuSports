import {ProductCatalogRepository} from "@productcatalog/domain/repositories/ProductCatalogRepository";
import {getMockProductDtos} from "../helpers/ProductDtoHelper";

export const productCatalogRepository: ProductCatalogRepository = {
    findAll: jest.fn().mockResolvedValue(getMockProductDtos()),
    findById: jest.fn().mockImplementation((productId: number) => getMockProductDtos().find(p => p.id === productId)),
}