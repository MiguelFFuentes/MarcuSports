import {Request, Response} from "express"
import {ProductDto} from "@productcatalog/application/dtos/ProductDto";
import {ProductCatalogController} from "@productcatalog/adapters/http/ProductCatalogController";
import {ProductCatalogService} from "@productcatalog/application/services/ProductCatalogService";
import {getMockProductDtos} from "@helpers/ProductDtoHelper";
import SpyInstance = jest.SpyInstance;
import {productCatalogRepository} from "../../../stubs/ProductCatalogRepositoryStub";

describe('ProductCatalogController', () => {

    const expectedProducts: ProductDto[] = getMockProductDtos()
    let productCatalogController: ProductCatalogController

    let productCatalogServiceMock: SpyInstance<Promise<ProductDto[]>>
    const requestMock = {} as Request
    const responseMock = {json: jest.fn()} as unknown as Response

    beforeEach(() => {
        const productCatalogService = new ProductCatalogService(productCatalogRepository)
        productCatalogServiceMock = jest.spyOn(productCatalogService, 'getProducts')
            .mockResolvedValue(expectedProducts)
        productCatalogController = new ProductCatalogController(productCatalogService)
    })

    afterEach(() => {
        productCatalogServiceMock.mockClear()
    })

    it('should retrieve a list of products', async () => {
        await productCatalogController.getProducts(requestMock, responseMock)

        expect(responseMock.json).toHaveBeenCalledWith(expectedProducts)
    })

    it('should call the ProductCatalogService', async () => {
        await productCatalogController.getProducts(requestMock, responseMock)

        expect(productCatalogServiceMock).toHaveBeenCalled()
    })

})