export function getMockPrismaShoppingCart() {
    return {
        id: 1,
        status: 'OPEN',
        products: [
            {
                product: {
                    id: 1,
                    name: 'Super bike',
                    stock: 10,
                    parts: [
                        {
                            id: 1,
                            name: 'Color',
                            description: 'This is a test',
                            options: [
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
                                    symmetricIncompatibleOptions: [],
                                    partId: 1
                                },
                                {
                                    id: 2,
                                    name: 'Green color',
                                    stock: 2,
                                    incompatibleOptions: [],
                                    symmetricIncompatibleOptions: [],
                                    partId: 1
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Size',
                            description: 'This is a test',
                            options: [
                                {
                                    id: 3,
                                    name: 'Big size',
                                    stock: 3,
                                    incompatibleOptions: [],
                                    symmetricIncompatibleOptions: [],
                                    partId: 2
                                },
                                {
                                    id: 4,
                                    name: 'Small size',
                                    stock: 0,
                                    incompatibleOptions: [],
                                    symmetricIncompatibleOptions: [],
                                    partId: 2
                                },
                                {
                                    id: 5,
                                    name: 'Medium size',
                                    stock: 1,
                                    incompatibleOptions: [],
                                    symmetricIncompatibleOptions: [
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
                    ]
                },
                selectedOptions: []
            }
        ]
    }
}

export function getMockPrismaEmptyShoppingCart() {
    return {
        id: 1,
        status:'OPEN',
        products: []
    }
}