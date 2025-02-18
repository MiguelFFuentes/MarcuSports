import {ShoppingCartStatus} from "./ShoppingCartStatus";

export class ShoppingCart {

    constructor(
        public id: number,
        public shoppingCartStatus: ShoppingCartStatus,
        public products: any
    ) { }

    addProduct(product: any) {
        throw new Error('Method not implemented.');
    }

}