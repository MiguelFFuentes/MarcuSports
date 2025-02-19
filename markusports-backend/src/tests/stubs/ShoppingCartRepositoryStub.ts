import {ShoppingCartRepository} from "@shoppingcart/domain/repositories/ShoppingCartRepository";
import {getMockEmptyShoppingCart, getMockShoppingCart} from "../helpers/shoppingcart/ShoppingCartHelper";

export const shoppingCartRepositoryStub: ShoppingCartRepository = {
    createShoppingCart: jest.fn().mockResolvedValue(getMockEmptyShoppingCart()),
    save: jest.fn().mockResolvedValue(getMockShoppingCart())
}