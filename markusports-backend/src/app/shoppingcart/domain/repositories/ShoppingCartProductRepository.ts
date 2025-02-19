import {CartProduct} from "../entities/CartProduct";

export interface ShoppingCartProductRepository {
    findProducts(productIds: number[]): Promise<CartProduct[]>
}