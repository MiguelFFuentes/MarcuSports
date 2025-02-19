import {PrismaShoppingCartRepository} from "@shoppingcart/infrastructure/repositories/PrismaShoppingCartRepository";
import {PrismaClient} from "@prisma/client";
import {getMockEmptyShoppingCart, getMockShoppingCart} from "@helpers/shoppingcart/ShoppingCartHelper";
import {
    getMockPrismaEmptyShoppingCart,
    getMockPrismaShoppingCart
} from "@helpers/shoppingcart/PrismaShoppingCartHelper";

describe('PrismaShoppingCartRepository', () => {

    let prismaShoppingCartRepository: PrismaShoppingCartRepository
    let prismaClient: PrismaClient

    beforeEach(() => {
        prismaClient = {
            shoppingCart: {
                create: jest.fn().mockResolvedValue(getMockPrismaEmptyShoppingCart()),
                update: jest.fn(),
                findUnique: jest.fn().mockImplementation((_) => getMockPrismaShoppingCart())
            },
            shoppingCartProduct: {
                upsert: jest.fn()
            },
            productPartOption: {
                update: jest.fn()
            }
        } as unknown as PrismaClient
        prismaShoppingCartRepository = new PrismaShoppingCartRepository(prismaClient)
    })

    describe('createShoppingCart', () => {

        it('should create a shopping cart', async () => {
            const expectedShoppingCart = getMockEmptyShoppingCart()

            const shoppingCart = await prismaShoppingCartRepository.createShoppingCart()

            expect(shoppingCart).toEqual(expectedShoppingCart)
        })

        it('should call the prisma client to create a shopping cart', async () => {
            await prismaShoppingCartRepository.createShoppingCart()

            expect(prismaClient.shoppingCart.create).toHaveBeenCalled()
        })
    })

    describe('save', () => {

        it('should call all the prisma client methods to save the shopping cart', async () => {
            await prismaShoppingCartRepository.save(getMockShoppingCart())

            expect(prismaClient.shoppingCart.update).toHaveBeenCalled()
            expect(prismaClient.shoppingCartProduct.upsert).toHaveBeenCalled()
            expect(prismaClient.productPartOption.update).toHaveBeenCalled()
        })
    })

    describe('getShoppingCart', () => {

        it('should get a shopping cart', async () => {
            const expectedShoppingCart = getMockShoppingCart()

            const shoppingCart = await prismaShoppingCartRepository.getShoppingCart(1)

            expect(shoppingCart).toEqual(expectedShoppingCart)
        })

        it('should call the prisma client', async () => {
            await prismaShoppingCartRepository.getShoppingCart(1)

            expect(prismaClient.shoppingCart.findUnique).toHaveBeenCalled()
        })
    })
})