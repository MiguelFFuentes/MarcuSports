import {ProductCatalogRepository} from "@productcatalog/domain/repositories/ProductCatalogRepository";
import {getMockProductDtos} from "../helpers/ProductDtoHelper";

export const productCatalogRepository: ProductCatalogRepository = {
    findAll: jest.fn().mockResolvedValue(getMockProductDtos())
}