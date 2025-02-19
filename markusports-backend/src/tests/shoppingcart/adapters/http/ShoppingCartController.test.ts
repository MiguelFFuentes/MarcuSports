import {ShoppingCartController} from "@shoppingcart/adapters/ShoppingCartController";
import {Request, Response} from "express";
import {ShoppingCartService} from "@shoppingcart/application/services/ShoppingCartService";
import {shoppingCartRepositoryStub} from "../../../stubs/ShoppingCartRepositoryStub";
import {shoppingCartProductRepositoryStub} from "../../../stubs/ShoppingCartProductRepositoryStub";
import {CreateShoppingCartDto} from "@shoppingcart/application/dtos/CreateShoppingCartDto";
import {GetShoppingCartDto} from "@shoppingcart/application/dtos/GetShoppingCartDto";

describe('ShoppingCartController', () => {

    let shoppingCartController: ShoppingCartController

    let createShoppingCartMock: jest.SpyInstance
    const requestMock = {
        body: {
            products: []
        }
    } as Request<CreateShoppingCartDto>
    const responseMock = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
    } as unknown as Response
    const nextMock = jest.fn()

    beforeEach(() => {

        const shoppingCartService = new ShoppingCartService(
            shoppingCartRepositoryStub,
            shoppingCartProductRepositoryStub
        )
        const mockCart: GetShoppingCartDto = {id: 1, products: []}
        createShoppingCartMock = jest.spyOn(shoppingCartService, 'createShoppingCart')
            .mockImplementation((payload: CreateShoppingCartDto) => Promise.resolve(mockCart))
        shoppingCartController = new ShoppingCartController(shoppingCartService)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    afterAll(() => {
        jest.restoreAllMocks()
    })

    describe('createShoppingCart', () => {
        it('should return 201 status when a shopping cart is created', async () => {
            await shoppingCartController.createShoppingCart(requestMock, responseMock, nextMock)
            expect(responseMock.status).toHaveBeenCalledWith(201)
        })

        it('should call the ShoppingCartService', async () => {
            await shoppingCartController.createShoppingCart(requestMock, responseMock, nextMock)
            expect(createShoppingCartMock).toHaveBeenCalled()
        })

        it('should call the error handler when an error raises', async () => {
            const error = new Error('Error creating shopping cart')
            const consoleMock = jest.spyOn(console, 'error')
                .mockImplementation()
            createShoppingCartMock.mockRejectedValue(error)

            await shoppingCartController.createShoppingCart(requestMock, responseMock, nextMock)

            expect(nextMock).toHaveBeenCalled()
            expect(consoleMock).toHaveBeenCalledWith('Error in POST /shoppingcart:', error)
        })
    })
})