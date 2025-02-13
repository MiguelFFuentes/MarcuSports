import {
    PrismaProductCatalogRepository
} from "@productcatalog/infrastructure/repositories/PrismaProductCatalogRepository";
import {PrismaClient} from "@prisma/client";
import {getMockPrismaProducts} from "@helpers/PrismaProductHelper";
import {getMockProducts} from "@helpers/ProductHelper";

describe('PrismaProductCatalogRepository', () => {
    let prismaProductCatalogRepository: PrismaProductCatalogRepository;
    let prismaClient: PrismaClient

    beforeEach(() => {
        prismaClient = {
            product: {
                findMany: jest.fn().mockResolvedValue(getMockPrismaProducts())
            }
        } as unknown as PrismaClient
        prismaProductCatalogRepository = new PrismaProductCatalogRepository(prismaClient as PrismaClient)
    });

    describe('findAll', () => {
        it('should return all products', async () => {
            const expectedProducts = getMockProducts()

            const products = await prismaProductCatalogRepository.findAll()

            expect(products).toEqual(expectedProducts)
        });

        it('should call the prisma client to get all products', async () => {
            await prismaProductCatalogRepository.findAll()

            expect(prismaClient.product.findMany).toHaveBeenCalled()
        })
    });

})