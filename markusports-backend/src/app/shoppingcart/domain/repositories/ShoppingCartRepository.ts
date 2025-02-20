import {ShoppingCart} from "../entities/ShoppingCart";

export interface ShoppingCartRepository {
    createShoppingCart(): Promise<ShoppingCart>
    save(cart: ShoppingCart): Promise<ShoppingCart>
    getShoppingCart(id: number): Promise<ShoppingCart>

    runAsTransaction<T>(fn: (transaction: any) => Promise<T>): Promise<T>
}