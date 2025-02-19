import {CartOption} from "@shoppingcart/domain/entities/CartOption";

export function getMockOptions(): CartOption[] {
    return [
        {
            id: 1,
            name: 'Red color',
            stock: 2,
            incompatibleOptions: [
                {
                    id: 5,
                    name: 'Medium size',
                    stock: 0,
                    partId: 2,
                    incompatibleOptions: []
                }
            ],
            partId: 1
        },
        {
            id: 2,
            name: 'Green color',
            stock: 2,
            incompatibleOptions: [],
            partId: 1
        },
        {
            id: 3,
            name: 'Big size',
            stock: 3,
            incompatibleOptions: [],
            partId: 2
        },
        {
            id: 4,
            name: 'Small size',
            stock: 0,
            incompatibleOptions: [],
            partId: 2
        },
        {
            id: 5,
            name: 'Medium size',
            stock: 1,
            incompatibleOptions: [
                {
                    id: 1,
                    name: 'Red color',
                    stock: 2,
                    partId: 1,
                    incompatibleOptions: []
                }
            ],
            partId: 2
        }
    ]
}

export function getMockSelectedOptions(): CartOption[] {
    return [
        {
            id: 1,
            name: 'Red color',
            stock: 2,
            incompatibleOptions: [
                {
                    id: 5,
                    name: 'Medium size',
                    stock: 0,
                    partId: 2,
                    incompatibleOptions: []
                }
            ],
            partId: 1
        },
        {
            id: 3,
            name: 'Big size',
            stock: 3,
            incompatibleOptions: [],
            partId: 2
        }
    ]
}