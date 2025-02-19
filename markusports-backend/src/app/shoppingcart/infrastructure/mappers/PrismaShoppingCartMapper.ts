import {ShoppingCart as PrismaShoppingCart} from "@prisma/client";
import {ShoppingCart} from "../../domain/entities/ShoppingCart";
import {ShoppingCartStatus} from "../../domain/valueobjects/ShoppingCartStatus";
import {CartProduct} from "../../domain/entities/CartProduct";
import {PrismaCartProductMapper} from "./PrismaCartProductMapper";

export class PrismaShoppingCartMapper {
    static toDomain(cart: PrismaShoppingCart): ShoppingCart {
        const cartProducts: CartProduct[] = (cart as any).products.map(({product, selectedOptions}: any) =>
            PrismaCartProductMapper.toDomain(product, selectedOptions))

        return new ShoppingCart(
            cart.id,
            ShoppingCartStatus[cart.status as keyof typeof ShoppingCartStatus],
            cartProducts
        )
    }
}