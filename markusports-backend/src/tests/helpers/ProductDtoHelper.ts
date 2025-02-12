import {ProductDto} from "../../app/productcatalog/application/dtos/ProductDto";

export function getMockProductDtos(): ProductDto[] {
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