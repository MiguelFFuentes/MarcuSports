import {ShoppingCart} from "@shoppingcart/domain/entities/ShoppingCart"
import {ShoppingCartStatus} from "@shoppingcart/domain/valueobjects/ShoppingCartStatus";
import {getMockCartProduct} from "@helpers/shoppingcart/CartProductHelper";

describe('ShoppingCart', () => {

    it('should add product to shopping cart', () => {

        const shoppingCart = new ShoppingCart(1, ShoppingCartStatus.OPEN, [])

        const product = getMockCartProduct()

        shoppingCart.addProduct(product, [1, 3])

        expect(shoppingCart.getProducts()).toEqual([product])
    })
})