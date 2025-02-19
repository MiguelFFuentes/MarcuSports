import {ShoppingCart} from "../entities/ShoppingCart";

export interface ShoppingCartRepository {
    createShoppingCart(): Promise<ShoppingCart>
    save(cart: ShoppingCart): Promise<ShoppingCart>
}