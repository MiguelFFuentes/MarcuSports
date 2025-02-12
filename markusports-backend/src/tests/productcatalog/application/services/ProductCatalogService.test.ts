import {ProductCatalogService} from "@productcatalog/application/services/ProductCatalogService";
import {getMockProductDtos} from "../../../helpers/ProductDtoHelper";
import {productCatalogRepository} from "../../../stubs/ProductCatalogRepositoryStub";

describe('ProductCatalogService', () => {

    const expectedProducts = getMockProductDtos()

    let productCatalogService: ProductCatalogService

    beforeEach(() => {
        productCatalogService = new ProductCatalogService(productCatalogRepository)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should retrieve a list of products', async () => {
        const products = await productCatalogService.getProducts()

        expect(products).toEqual(expectedProducts)
    })

    it('should call the repository method', async () => {
        await productCatalogService.getProducts()

        expect(productCatalogRepository.findAll).toHaveBeenCalled()
    })
})