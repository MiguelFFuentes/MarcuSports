import {CartProduct} from "@shoppingcart/domain/entities/CartProduct";
import {getMockOptions, getMockSelectedOptions} from "./CartOptionHelper";
import {CartPartId} from "@shoppingcart/domain/valueobjects/CartPartId";

const partIds: CartPartId[] = [
    {id: 1},
    {id: 2},
]

export function getMockEmptyCartProduct() {
    return new CartProduct(
        1,
        'Test product',
        'This is a test product',
        getMockOptions(),
        [],
        partIds
    )
}

export function getMockCartProduct() {
    return new CartProduct(
        1,
        'Test product',
        'This is a test product',
        getMockOptions(),
        getMockSelectedOptions(),
        partIds
    )
}

export function getMockCartProducts() {
    return [
        new CartProduct(
            1,
            'Test product',
            'This is a test product',
            getMockOptions(),
            getMockSelectedOptions(),
            partIds
        ),
        new CartProduct(
            2,
            'Another Test product',
            'This is another test product',
            getMockOptions(),
            getMockSelectedOptions(),
            partIds
        )
    ]
}

