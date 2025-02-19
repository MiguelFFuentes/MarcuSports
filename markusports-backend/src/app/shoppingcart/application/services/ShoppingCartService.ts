import {CreateShoppingCartDto} from "../dtos/CreateShoppingCartDto";
import {ShoppingCartRepository} from "../../domain/repositories/ShoppingCartRepository";
import {GetShoppingCartDto} from "../dtos/GetShoppingCartDto";
import {ShoppingCartProductRepository} from "../../domain/repositories/ShoppingCartProductRepository";
import {CartProduct} from "../../domain/entities/CartProduct";
import {ShoppingCartMapper} from "../mappers/ShoppingCartMapper";

export class ShoppingCartService {

    constructor(
        private shoppingCartRepository: ShoppingCartRepository,
        private productRepository: ShoppingCartProductRepository
    ) {
    }

    async createShoppingCart({products}: CreateShoppingCartDto): Promise<GetShoppingCartDto> {

        const shoppingCart = await this.shoppingCartRepository.createShoppingCart()
        const cartProducts: CartProduct[] = await this.productRepository.findProducts(products.map(product => product.id))

        for (const product of cartProducts) {
            const selectedOptions = products.find(p => p.id === product.id)!.selectedOptionsIds
            shoppingCart.addProduct(product, selectedOptions)
        }
        await this.shoppingCartRepository.save(shoppingCart)
        return ShoppingCartMapper.toDto(shoppingCart)
    }

    async getShoppingCart(id: number): Promise<GetShoppingCartDto> {
        throw new Error('Not implemented')
    }
}