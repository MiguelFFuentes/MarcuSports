import {ShoppingCartRepository} from "../../domain/repositories/ShoppingCartRepository";
import {ShoppingCart} from "../../domain/entities/ShoppingCart";
import {PrismaClient, ShoppingCart as PrismaShoppingCart} from "@prisma/client";
import {getPrismaClient, runAsPrismaTransaction} from "../../../core/PrismaService";
import {PrismaShoppingCartMapper} from "../mappers/PrismaShoppingCartMapper";
import {CartProduct} from "../../domain/entities/CartProduct";
import {CartOption} from "../../domain/entities/CartOption";
import {PrismaShoppingCartQuery} from "./PrismaShoppingCartQuery";

export class PrismaShoppingCartRepository implements ShoppingCartRepository {

    runAsTransaction = runAsPrismaTransaction

    constructor(private prisma: PrismaClient = getPrismaClient()) {
    }

    async createShoppingCart(): Promise<ShoppingCart> {
        const shoppingCart = await this.prisma.shoppingCart.create({
            include: PrismaShoppingCartQuery
        })
        return PrismaShoppingCartMapper.toDomain(shoppingCart)
    }

    async getShoppingCart(id: number): Promise<ShoppingCart> {
        const shoppingCart = await this.prisma.shoppingCart.findUnique({
            where: {id},
            include: PrismaShoppingCartQuery
        }) as PrismaShoppingCart
        return PrismaShoppingCartMapper.toDomain(shoppingCart)
    }

    async save(cart: ShoppingCart): Promise<ShoppingCart> {

        await this.updateShoppingCart(cart)

        for (const product of cart.getProducts()) {

            await this.findOrUpdateProductInCart(cart, product)

            await Promise.all(product.getSelectedOptions().map(option => this.updateProductOptionStock(option)))
        }
        return cart
    }

    private async updateShoppingCart(cart: ShoppingCart) {
        await this.prisma.shoppingCart.update({
            where: {
                id: cart.id
            },
            data: {
                status: cart.status
            }
        })
    }

    private async findOrUpdateProductInCart(cart: ShoppingCart, product: CartProduct) {
        await this.prisma.shoppingCartProduct.upsert({
            where: {
                shoppingCartId_productId: {
                    shoppingCartId: cart.id,
                    productId: product.id
                }
            },
            create: {
                product: {
                    connect: {id: product.id}
                },
                shoppingCart: {
                    connect: {id: cart.id}
                },
                selectedOptions: {
                    connect: product.getSelectedOptions().map(option => ({id: option.id}))
                }
            },
            // Prisma doesn't have findOrCreate, upsert is a workaround according to their documentation
            update: {}
        })
    }

    private async updateProductOptionStock(option: CartOption) {
        await this.prisma.productPartOption.update({
            where: {id: option.id},
            data: {stock: option.stock}
        })
    }

}