import {ShoppingCartStatus} from "../valueobjects/ShoppingCartStatus";
import {CartProduct} from "./CartProduct";

export class ShoppingCart {

    constructor(
        public id: number,
        public shoppingCartStatus: ShoppingCartStatus,
        private products: CartProduct[]
    ) {
        // We do this in the constructor so every ShoppingCart instance is valid
        this.products.forEach(product => product.validate())
    }

    addProduct(product: CartProduct, selectedOptions: number[]) {
        product.selectOptions(selectedOptions)
        product.validate()
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

}