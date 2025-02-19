import {
    PrismaShoppingCartProductRepository
} from "@shoppingcart/infrastructure/repositories/PrismaShoppingCartProductRepository";
import {PrismaClient} from "@prisma/client";
import {CartProduct} from "@shoppingcart/domain/entities/CartProduct";
import {getMockPrismaProducts} from "@helpers/productcatalog/PrismaProductHelper";
import {getMockCartProducts2} from "@helpers/shoppingcart/CartProductHelper";

describe('PrismaShoppingCartProductRepository', () => {


    let prismaShoppingCartProductRepository: PrismaShoppingCartProductRepository
    let prismaClient: PrismaClient

    beforeEach(() => {
        prismaClient = {
            product: {
                findMany: jest.fn().mockResolvedValue(getMockPrismaProducts()),
            }
        } as unknown as PrismaClient
        prismaShoppingCartProductRepository = new PrismaShoppingCartProductRepository(prismaClient)
    })

    it('should return cart products by ids', async () => {
        const expectedProducts: CartProduct[] = getMockCartProducts2()

        const products = await prismaShoppingCartProductRepository.findProducts([1, 2])
        expect(products).toEqual(expectedProducts)
    })

    it('should call the prisma client to get cart products by ids', async () => {
        await prismaShoppingCartProductRepository.findProducts([1, 2])
        expect(prismaClient.product.findMany).toHaveBeenCalled()
    })
})