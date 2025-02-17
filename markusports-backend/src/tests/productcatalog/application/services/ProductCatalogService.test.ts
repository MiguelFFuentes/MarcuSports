import {ProductCatalogService} from "@productcatalog/application/services/ProductCatalogService";
import {ProductNotFoundError} from "@productcatalog/domain/exceptions/ProductNotFoundError";
import {getMockProductDtos} from "@helpers/ProductDtoHelper";
import {productCatalogRepository} from "../../../stubs/ProductCatalogRepositoryStub";

describe('ProductCatalogService', () => {

    const expectedProducts = getMockProductDtos()
    const productId = 1
    const nonExistingProductId = -1

    let productCatalogService: ProductCatalogService

    beforeEach(() => {
        productCatalogService = new ProductCatalogService(productCatalogRepository)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('getProducts', () => {
        it('should retrieve a list of products', async () => {
            const products = await productCatalogService.getProducts()

            expect(products).toEqual(expectedProducts)
        })

        it('should call the repository method', async () => {
            await productCatalogService.getProducts()

            expect(productCatalogRepository.findAll).toHaveBeenCalled()
        })
    })

    describe('getProduct', () => {
        it('should retrieve a product by id', async () => {
            const expectedProduct = expectedProducts.find(p => p.id === productId)

            const product = await productCatalogService.getProduct(productId)

            expect(product).toEqual(expectedProduct)
        })

        it('should throw an error if the product is not found', async () => {
            await expect(productCatalogService.getProduct(nonExistingProductId)).rejects.toThrow(ProductNotFoundError)
        })

        it('should call the repository method', async () => {
            await productCatalogService.getProduct(productId)

            expect(productCatalogRepository.findById).toHaveBeenCalledWith(productId)
        })
    })

})