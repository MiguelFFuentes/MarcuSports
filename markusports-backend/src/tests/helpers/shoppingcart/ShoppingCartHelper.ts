import {ShoppingCart} from "@shoppingcart/domain/entities/ShoppingCart";
import {ShoppingCartStatus} from "@shoppingcart/domain/valueobjects/ShoppingCartStatus";
import {getMockCartProduct} from "./CartProductHelper";

export function getMockEmptyShoppingCart(): ShoppingCart {
    return new ShoppingCart(1, ShoppingCartStatus.OPEN, [])
}

export function getMockShoppingCart(): ShoppingCart {
    return new ShoppingCart(1, ShoppingCartStatus.OPEN, [getMockCartProduct()])
}