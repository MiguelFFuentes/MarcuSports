import {CartProduct} from "@shoppingcart/domain/entities/CartProduct";
import {getMockOptions} from "./CartOptionHelper";
import {CartPartId} from "@shoppingcart/domain/valueobjects/CartPartId";

export function getMockProduct() {
    const partIds: CartPartId[] = [
        {id: 1},
        {id: 2},
    ]
    return new CartProduct(
        1,
        'Test product',
        'This is a test product',
        getMockOptions(),
        [],
        partIds
    )
}