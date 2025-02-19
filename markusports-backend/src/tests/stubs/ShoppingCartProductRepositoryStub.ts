import {ShoppingCartProductRepository} from "@shoppingcart/domain/repositories/ShoppingCartProductRepository";
import {getMockNoSelectionCartProducts} from "../helpers/shoppingcart/CartProductHelper";

export const shoppingCartProductRepositoryStub: ShoppingCartProductRepository = {
    findProducts: jest.fn().mockImplementation((productIds: number[]) => Promise.resolve(getMockNoSelectionCartProducts()))
}