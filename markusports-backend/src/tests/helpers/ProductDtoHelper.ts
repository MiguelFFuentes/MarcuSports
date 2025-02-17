import {ProductDto} from "@productcatalog/application/dtos/ProductDto";

export function getMockProductDtos(): ProductDto[] {
    return [
        {
            id: 1,
            name: "Test product",
            price: 29.99,
            description: "This is a product for testing",
            parts: [
                {
                    id: 1,
                    name: "Test part",
                    options: [
                        {
                            id: 1,
                            name: "Option 1",
                            stock: 10
                        },
                        {
                            id: 2,
                            name: "Option 2",
                            stock: 5
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Another Test product",
            price: 19.99,
            description: "This is a product for testing",
            parts: []
        }
    ]
}