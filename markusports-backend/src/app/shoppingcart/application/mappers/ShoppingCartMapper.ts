import {ShoppingCart} from "../../domain/entities/ShoppingCart";
import {GetShoppingCartDto} from "../dtos/GetShoppingCartDto";

export class ShoppingCartMapper {
    static toDto(cart: ShoppingCart): GetShoppingCartDto {
        return {
            id: cart.id,
            products: cart.getProducts().map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    selectedOptions: product.getSelectedOptions().map(option => option.name)
                }
            })
        }
    }
}