import {ShoppingCartController} from "@shoppingcart/adapters/ShoppingCartController";
import {Request, Response} from "express";
import {ShoppingCartService} from "@shoppingcart/application/services/ShoppingCartService";
import {shoppingCartRepositoryStub} from "../../../stubs/ShoppingCartRepositoryStub";
import {shoppingCartProductRepositoryStub} from "../../../stubs/ShoppingCartProductRepositoryStub";
import {CreateShoppingCartDto} from "@shoppingcart/application/dtos/CreateShoppingCartDto";
import {GetShoppingCartDto} from "@shoppingcart/application/dtos/GetShoppingCartDto";
import {MissingProductOptionsError} from "@shoppingcart/domain/exceptions/MissingProductOptionsError";
import {ShoppingCartNotFoundError} from "@shoppingcart/domain/exceptions/ShoppingCartNotFoundError";

describe('ShoppingCartController', () => {

    let shoppingCartController: ShoppingCartController

    let createShoppingCartMock: jest.SpyInstance
    let getShoppingCartMock: jest.SpyInstance
    let requestMock: any
    const responseMock = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
    } as unknown as Response
    const nextMock = jest.fn()

    const mockCart: GetShoppingCartDto = {id: 1, products: []}

    beforeEach(() => {

        const shoppingCartService = new ShoppingCartService(
            shoppingCartRepositoryStub,
            shoppingCartProductRepositoryStub
        )
        createShoppingCartMock = jest.spyOn(shoppingCartService, 'createShoppingCart')
            .mockImplementation((payload: CreateShoppingCartDto) => Promise.resolve(mockCart))
        getShoppingCartMock = jest.spyOn(shoppingCartService, 'getShoppingCart')
            .mockImplementation((id: number) => Promise.resolve(mockCart))
        shoppingCartController = new ShoppingCartController(shoppingCartService)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    afterAll(() => {
        jest.restoreAllMocks()
    })

    describe('createShoppingCart', () => {
        beforeEach(() => {
            requestMock = {
                body: {
                    products: []
                }
            } as Request<CreateShoppingCartDto>
        })

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
            expect(consoleMock).toHaveBeenCalledWith('Error in POST /shoppingcarts:', error)
        })

        it('should return a 400 status when the error is from the domain', async () => {
            const error = new MissingProductOptionsError(1, 2)
            const consoleMock = jest.spyOn(console, 'error')
                .mockImplementation()
            createShoppingCartMock.mockRejectedValue(error)

            await shoppingCartController.createShoppingCart(requestMock, responseMock, nextMock)

            expect(responseMock.status).toHaveBeenCalledWith(400)
            expect(responseMock.json).toHaveBeenCalledWith({error: error.message})
        })
    })

    describe('getShoppingCart', () => {
        beforeEach(() => {
            requestMock = {
                params: {
                    id: 1
                }
            } as unknown as Request
        })

        it('should return the shopping cart', async () => {
            await shoppingCartController.getShoppingCart(requestMock, responseMock, nextMock)
            expect(responseMock.json).toHaveBeenCalledWith(mockCart)
        })

        it('should call the shopping cart service', async () => {
            await shoppingCartController.getShoppingCart(requestMock, responseMock, nextMock)
            expect(getShoppingCartMock).toHaveBeenCalled()
        })

        it('should call the error handler when an error raises', async () => {
            const error = new Error('Error creating shopping cart')
            const consoleMock = jest.spyOn(console, 'error')
                .mockImplementation()
            getShoppingCartMock.mockRejectedValue(error)

            await shoppingCartController.getShoppingCart(requestMock, responseMock, nextMock)

            expect(nextMock).toHaveBeenCalled()
            expect(consoleMock).toHaveBeenCalledWith('Error in GET /shoppingcarts/:id:', error)
        })

        it('should return a 400 status when the error is from the domain', async () => {
            const error = new ShoppingCartNotFoundError(1)
            const consoleMock = jest.spyOn(console, 'error')
                .mockImplementation()
            getShoppingCartMock.mockRejectedValue(error)

            await shoppingCartController.getShoppingCart(requestMock, responseMock, nextMock)

            expect(responseMock.status).toHaveBeenCalledWith(404)
            expect(responseMock.json).toHaveBeenCalledWith({error: error.message})
        })
    })
})