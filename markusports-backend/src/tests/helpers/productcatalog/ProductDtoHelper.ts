import {ProductDto} from "@productcatalog/application/dtos/ProductDto";

export function getMockProductDtos(): ProductDto[] {
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
                    options: [
                        {
                            id: 1,
                            name: "Red color",
                            stock: 10,
                            incompatibleOptions: [2, 3]
                        },
                        {
                            id: 2,
                            name: "Green color",
                            stock: 5,
                            incompatibleOptions: [1]
                        }
                    ]
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