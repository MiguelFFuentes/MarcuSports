export function getMockPrismaProducts() {

    const [option1, option2] = getMockPrismaProductPartOptions()
    return [
        {
            id: 1,
            name: "Super bike",
            price: 29.99,
            description: "This is a product for testing",
            parts: [
                {
                    id: 1,
                    name: "Color",
                    options: [option1, option2]
                }
            ]
        },
        {
            id: 2,
            name: "Mega bike",
            price: 19.99,
            description: "This is a product for testing",
            parts: []
        }
    ]
}

function getMockPrismaProductPartOptions() {
    return [
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
                }],
            symmetricIncompatibleOptions: [],
            partId: 1
        },
        {
            id: 2,
            name: "Green color",
            stock: 5,
            incompatibleOptions: [],
            symmetricIncompatibleOptions: [
                {
                    id: 1,
                    name: "Red color",
                    stock: 10,
                    incompatibleOptions: [],
                    partId: 1
                }
            ],
            partId: 1
        },
        {
            id: 3,
            name: "Big size",
            stock: 8,
            incompatibleOptions: [],
            symmetricIncompatibleOptions: [
                {
                    id: 1,
                    name: "Red color",
                    stock: 10,
                    incompatibleOptions: [],
                    partId: 1

                }
            ],
            partId: 2
        },
        {
            id: 4,
            name: "Small size",
            stock: 0,
            incompatibleOptions: [],
            symmetricIncompatibleOptions: [],
            partId: 2
        }
    ]
}