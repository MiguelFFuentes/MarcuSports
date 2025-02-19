import {ShoppingCartProductRepository} from "@shoppingcart/domain/repositories/ShoppingCartProductRepository";
import {getMockCartProducts} from "../helpers/shoppingcart/CartProductHelper";

export const shoppingCartProductRepositoryStub: ShoppingCartProductRepository = {
    findProducts: jest.fn().mockImplementation((productIds: number[]) => Promise.resolve(getMockCartProducts()))
}