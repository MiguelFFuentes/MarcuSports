import {Request, Response} from "express"
import {ProductDto} from "@productcatalog/application/dtos/ProductDto";
import {ProductCatalogController} from "@productcatalog/adapters/http/ProductCatalogController";
import {ProductCatalogService} from "@productcatalog/application/services/ProductCatalogService";
import {getMockProductDtos} from "@helpers/ProductDtoHelper";
import SpyInstance = jest.SpyInstance;
import {productCatalogRepository} from "../../../stubs/ProductCatalogRepositoryStub";

describe('ProductCatalogController', () => {

    const expectedProducts: ProductDto[] = getMockProductDtos()
    const expectedProduct = expectedProducts[0]
    let productCatalogController: ProductCatalogController

    let getProductsMock: SpyInstance<Promise<ProductDto[]>>
    let getProductMock: SpyInstance<Promise<ProductDto>>
    const requestMock = {} as Request
    const responseMock = {json: jest.fn()} as unknown as Response
    const nextMock = jest.fn()

    beforeEach(() => {
        const productCatalogService = new ProductCatalogService(productCatalogRepository)
        getProductsMock = jest.spyOn(productCatalogService, 'getProducts')
            .mockResolvedValue(expectedProducts)
        getProductMock = jest.spyOn(productCatalogService, 'getProduct')
            .mockResolvedValue(expectedProduct)
        productCatalogController = new ProductCatalogController(productCatalogService)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    afterAll(() => {
        jest.restoreAllMocks()
    })

    describe('getProducts', () => {
        it('should retrieve a list of products', async () => {
            await productCatalogController.getProducts(requestMock, responseMock, nextMock)

            expect(responseMock.json).toHaveBeenCalledWith(expectedProducts)
        })

        it('should call the ProductCatalogService', async () => {
            await productCatalogController.getProducts(requestMock, responseMock, nextMock)

            expect(getProductsMock).toHaveBeenCalled()
        })

        it('should call the error handler when an error raises', async () => {
            const error = new Error('Error retrieving products')
            const consoleMock = jest.spyOn(console, 'error').mockImplementation()
            getProductsMock.mockRejectedValue(error)

            await productCatalogController.getProducts(requestMock, responseMock, nextMock)

            expect(nextMock).toHaveBeenCalled()
            expect(consoleMock).toHaveBeenCalledWith('Error in GET /products:', error)
        })
    })

    describe('getProduct', () => {

        beforeAll(() => {
            requestMock.params = {id: '1'}
        })

        it('should retrieve the product with the id provided', async () => {
            await productCatalogController.getProduct(requestMock, responseMock, nextMock)

            expect(responseMock.json).toHaveBeenCalledWith(expectedProduct)
        })

        it('should call the ProductCatalogService', async () => {
            await productCatalogController.getProduct(requestMock, responseMock, nextMock)
            expect(getProductMock).toHaveBeenCalled()
        })

        it('should call the error handler when an error raises', async () => {
            const error = new Error('Error retrieving product')
            const consoleMock = jest.spyOn(console, 'error').mockImplementation()
            getProductMock.mockRejectedValue(error)

            await productCatalogController.getProduct(requestMock, responseMock, nextMock)

            expect(nextMock).toHaveBeenCalled()
            expect(consoleMock).toHaveBeenCalledWith('Error in GET /products/:id:', error)
        })
    })
})