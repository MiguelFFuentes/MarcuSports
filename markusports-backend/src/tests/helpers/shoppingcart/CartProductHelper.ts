import {CartProduct} from "@shoppingcart/domain/entities/CartProduct";
import {getMockOptions, getMockSelectedOptions} from "./CartOptionHelper";
import {CartPartId} from "@shoppingcart/domain/valueobjects/CartPartId";

const partIds: CartPartId[] = [
    {id: 1},
    {id: 2},
]

export function getMockNoSelectionCartProduct() {
    return getMockNoSelectionCartProducts()[0]
}

export function getMockCartProduct() {
    return getMockCartProducts()[0]
}

export function getMockNoSelectionCartProducts() {
    return [
        new CartProduct(
            1,
            'Super bike',
            'This is a test product',
            19.99,
            getMockOptions(),
            [],
            partIds
        ),
        new CartProduct(
            2,
            'Mega bike',
            'This is another test product',
            19.99,
            getMockOptions(),
            [],
            partIds
        )
    ]
}

export function getMockCartProducts() {
    return [
        new CartProduct(
            1,
            'Super bike',
            'This is a test product',
            19.99,
            getMockOptions(),
            getMockSelectedOptions(),
            partIds
        ),
        new CartProduct(
            2,
            'Mega bike',
            'This is another test product',
            19.99,
            getMockOptions(),
            getMockSelectedOptions(),
            partIds
        )
    ]
}

