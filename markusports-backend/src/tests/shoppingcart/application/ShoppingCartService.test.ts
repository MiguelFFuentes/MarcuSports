import {shoppingCartRepositoryStub} from "../../stubs/ShoppingCartRepositoryStub"
import {shoppingCartProductRepositoryStub} from "../../stubs/ShoppingCartProductRepositoryStub"
import {ShoppingCartService} from "@shoppingcart/application/services/ShoppingCartService"
import {CreateShoppingCartDto} from "@shoppingcart/application/dtos/CreateShoppingCartDto"
import {GetShoppingCartDto} from "@shoppingcart/application/dtos/GetShoppingCartDto"
import {getMockCreateCartProductDto} from "@helpers/shoppingcart/ShoppingCartDtoHelper";
import {ShoppingCartNotFoundError} from "@shoppingcart/domain/exceptions/ShoppingCartNotFoundError";

describe('ShoppingCartService', () => {

    let shoppingCartService: ShoppingCartService

    beforeEach(() => {
        shoppingCartService = new ShoppingCartService(
            shoppingCartRepositoryStub,
            shoppingCartProductRepositoryStub
        )
    })
    describe('createShoppingCart', () => {

        const createShoppingCartDto: CreateShoppingCartDto = getMockCreateCartProductDto()

        it('should create a shopping cart with an ID', async () => {

            const expectedShoppingCartDto: GetShoppingCartDto = {
                id: 1,
                products: [
                    {
                        id: 1,
                        name: 'Super bike',
                        price: 19.99,
                        selectedOptions: [
                            'Red color',
                            'Big size'
                        ]
                    },
                    {
                        id: 2,
                        name: 'Mega bike',
                        price: 19.99,
                        selectedOptions: [
                            'Red color',
                            'Big size'
                        ]
                    }
                ]
            }

            const shoppingCart = await shoppingCartService.createShoppingCart(createShoppingCartDto)

            expect(shoppingCart).toEqual(expectedShoppingCartDto)
        })

        it('should call the repository methods', async () => {

            await shoppingCartService.createShoppingCart(createShoppingCartDto)

            expect(shoppingCartRepositoryStub.createShoppingCart).toHaveBeenCalled()
            expect(shoppingCartRepositoryStub.save).toHaveBeenCalled()
            expect(shoppingCartProductRepositoryStub.findProducts).toHaveBeenCalled()
        })
    })

    describe('getShoppingCart', () => {

        it('should return a shopping cart', async () => {

            const expectedShoppingCartDto: GetShoppingCartDto = {
                id: 1,
                products: [
                    {
                        id: 1,
                        name: 'Super bike',
                        price: 19.99,
                        selectedOptions: [
                            'Red color',
                            'Big size'
                        ]
                    }
                ]
            }

            const shoppingCart = await shoppingCartService.getShoppingCart(1)
            expect(shoppingCart).toEqual(expectedShoppingCartDto)
        })

        it('should raise an exception when a shopping cart does not exist', async () => {
            await expect(shoppingCartService.getShoppingCart(-1)).rejects.toThrowError(ShoppingCartNotFoundError)
        })
    })

})