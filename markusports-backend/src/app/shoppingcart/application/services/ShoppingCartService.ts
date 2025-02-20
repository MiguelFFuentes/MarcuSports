import {CreateShoppingCartDto} from "../dtos/CreateShoppingCartDto";
import {ShoppingCartRepository} from "../../domain/repositories/ShoppingCartRepository";
import {GetShoppingCartDto} from "../dtos/GetShoppingCartDto";
import {ShoppingCartProductRepository} from "../../domain/repositories/ShoppingCartProductRepository";
import {CartProduct} from "../../domain/entities/CartProduct";
import {ShoppingCartMapper} from "../mappers/ShoppingCartMapper";
import {ShoppingCartNotFoundError} from "../../domain/exceptions/ShoppingCartNotFoundError";
import {UpdateShoppingCartDto} from "../dtos/UpdateShoppingCartDto";
import {CreateCartProductDto} from "../dtos/CreateCartProductDto";
import {ShoppingCart} from "../../domain/entities/ShoppingCart";

export class ShoppingCartService {

    constructor(
        private shoppingCartRepository: ShoppingCartRepository,
        private productRepository: ShoppingCartProductRepository
    ) {
    }

    async createShoppingCart({products}: CreateShoppingCartDto): Promise<GetShoppingCartDto> {
        return this.shoppingCartRepository.runAsTransaction(async (transaction) => {
            const shoppingCart = await this.shoppingCartRepository.createShoppingCart()
            await this.addProductsToShoppingCart(shoppingCart, products)
            return ShoppingCartMapper.toDto(shoppingCart)
        })
    }

    async getShoppingCart(id: number): Promise<GetShoppingCartDto> {
        const shoppingCart = await this.shoppingCartRepository.getShoppingCart(id)
        if (!shoppingCart) throw new ShoppingCartNotFoundError(id)
        return ShoppingCartMapper.toDto(shoppingCart)
    }

    async updateShoppingCart(shoppingCartId: number, {products}: UpdateShoppingCartDto): Promise<GetShoppingCartDto> {
        return this.shoppingCartRepository.runAsTransaction(async (transaction) => {
            const shoppingCart = await this.shoppingCartRepository.getShoppingCart(shoppingCartId)
            if (!shoppingCart) throw new ShoppingCartNotFoundError(shoppingCartId)

            await this.addProductsToShoppingCart(shoppingCart, products)

            return ShoppingCartMapper.toDto(shoppingCart)
        })
    }

    private async addProductsToShoppingCart(shoppingCart: ShoppingCart, products: CreateCartProductDto[]) {
        const cartProducts: CartProduct[] = await this.productRepository.findProducts(products.map(product => product.id))

        for (const product of cartProducts) {
            const selectedOptions = products.find(p => p.id === product.id)!.selectedOptionsIds
            shoppingCart.addProduct(product, selectedOptions)
        }
        await this.shoppingCartRepository.save(shoppingCart)
    }
}