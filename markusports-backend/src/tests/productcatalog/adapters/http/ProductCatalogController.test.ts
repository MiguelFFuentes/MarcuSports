import {Request, Response} from "express"
import {ProductDto} from "@productcatalog/application/dtos/ProductDto";
import {ProductCatalogController} from "@productcatalog/adapters/http/ProductCatalogController";
import {getMockProductDtos} from "@helpers/ProductDtoHelper";
import {ProductCatalogService} from "@productcatalog/application/services/ProductCatalogService";
import SpyInstance = jest.SpyInstance;

describe('ProductCatalogController', () => {

    const expectedProducts: ProductDto[] = getMockProductDtos()
    let productCatalogController: ProductCatalogController

    let productCatalogServiceMock: SpyInstance<Promise<ProductDto[]>>
    const requestMock = {} as Request
    const responseMock = {json: jest.fn()} as unknown as Response

    beforeEach(() => {
        const productCatalogService = new ProductCatalogService()
        productCatalogServiceMock = jest.spyOn(productCatalogService, 'getProducts')
            .mockResolvedValue(expectedProducts)
        productCatalogController = new ProductCatalogController(productCatalogService)
    })

    it('should retrieve a list of products', async () => {
        await productCatalogController.getProducts(requestMock, responseMock)

        expect(responseMock.json).toHaveBeenCalledWith(expectedProducts)
    })

    it('should call the ProductCatalogService', async () => {
        await productCatalogController.getProducts(requestMock, responseMock)

        expect(productCatalogServiceMock).toHaveBeenCalled()
    })

});