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
                findMany: jest.fn().mockResolvedValue(getMockPrismaProducts()),
                findUnique: jest.fn().mockResolvedValue(getMockPrismaProducts()[0])
            }
        } as unknown as PrismaClient
        prismaProductCatalogRepository = new PrismaProductCatalogRepository(prismaClient as PrismaClient)
    });

    describe('findAll', () => {
        it('should return all products', async () => {
            const expectedProducts = getMockProducts()

            const products = await prismaProductCatalogRepository.findAll()

            expect(products).toEqual(expectedProducts)
        })

        it('should call the prisma client to get all products', async () => {
            await prismaProductCatalogRepository.findAll()

            expect(prismaClient.product.findMany).toHaveBeenCalled()
        })
    })

    describe('findById', () => {
        it('should return a product by id', async () => {
            const expectedProduct = getMockProducts()[0]

            const product = await prismaProductCatalogRepository.findById(1)

            expect(product).toEqual(expectedProduct)
        })

        it('should return null if product is not found', async () => {
            prismaClient.product.findUnique = jest.fn().mockResolvedValue(null)

            const product = await prismaProductCatalogRepository.findById(999)

            expect(product).toBeNull()
        })

        it('should call the prisma client to get a product by id', async () => {
            await prismaProductCatalogRepository.findById(1)

            expect(prismaClient.product.findUnique).toHaveBeenCalled()
        })
    })

})