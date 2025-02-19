import {GetCartProductDto} from "./GetCartProductDto";

export interface GetShoppingCartDto {
    id: number
    products: GetCartProductDto[]
}