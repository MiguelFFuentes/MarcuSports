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

export function getMockCartProducts2(): CartProduct[] {
    return [
        new CartProduct(
            1,
            'Super bike',
            'This is a product for testing',
            29.99,
            [
                {
                    id: 1,
                    name: "Red color",
                    stock: 10,
                    incompatibleOptions: [
                        {
                            id: 2,
                            name: "Green color",
                            stock: 5,
                            incompatibleOptions: [],
                            partId: 1
                        },
                        {
                            id: 3,
                            name: "Big size",
                            stock: 8,
                            incompatibleOptions: [],
                            partId: 2
                        }
                    ],
                    partId: 1
                },
                {
                    id: 2,
                    name: "Green color",
                    stock: 5,
                    incompatibleOptions: [
                        {
                            id: 1,
                            name: "Red color",
                            stock: 10,
                            incompatibleOptions: [],
                            partId: 1
                        }
                    ],
                    partId: 1
                }
            ],
            [],
            [{id: 1}],
            undefined
        ),
        new CartProduct(
            2,
            'Mega bike',
            'This is a product for testing',
            19.99,
            [],
            [],
            [],
            undefined
        )
    ]
}

