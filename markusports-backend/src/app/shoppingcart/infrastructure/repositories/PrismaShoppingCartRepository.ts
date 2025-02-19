import {ShoppingCartRepository} from "../../domain/repositories/ShoppingCartRepository";
import {ShoppingCart} from "../../domain/entities/ShoppingCart";

export class PrismaShoppingCartRepository implements ShoppingCartRepository {
    createShoppingCart(): Promise<ShoppingCart> {
        throw new Error('Method not implemented')
    }

    save(cart: ShoppingCart): Promise<ShoppingCart> {
        throw new Error('Method not implemented')
    }

}