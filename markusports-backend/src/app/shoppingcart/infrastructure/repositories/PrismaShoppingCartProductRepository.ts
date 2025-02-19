import {ShoppingCartProductRepository} from "../../domain/repositories/ShoppingCartProductRepository";
import {CartProduct} from "../../domain/entities/CartProduct";

export class PrismaShoppingCartProductRepository implements ShoppingCartProductRepository {
    findProducts(productIds: number[]): Promise<CartProduct[]> {
        throw new Error('Method not implemented')
    }

}