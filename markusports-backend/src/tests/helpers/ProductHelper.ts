import {Product} from "@productcatalog/domain/entities/Product";

export function getMockProducts(): Product[] {
    return [
        {
            id: "1",
            name: "Test product",
            price: 29.99,
            description: "This is a product for testing"
        },
        {
            id: "2",
            name: "Another Test product",
            price: 19.99,
            description: "This is a product for testing"
        }
    ]
}