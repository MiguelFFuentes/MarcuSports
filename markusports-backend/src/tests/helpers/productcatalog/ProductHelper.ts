import {Product} from "../../../app/productcatalog/domain/entities/Product";
import {ProductPartOption} from "../../../app/productcatalog/domain/entities/ProductPartOption";

export function getMockProducts(): Product[] {

    const [option1, option2] = getMockProductPartOptions()
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
                    options: [option1, option2]
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

function getMockProductPartOptions(): ProductPartOption[] {
    return [
        {
            id: 1,
            name: "Option 1",
            stock: 10,
            incompatibleOptions: [
                {
                    id: 2,
                    name: "Option 2",
                    stock: 5,
                    incompatibleOptions: []
                },
                {
                    id: 3,
                    name: "Option 3",
                    stock: 8,
                    incompatibleOptions: []
                }
            ]
        },
        {
            id: 2,
            name: "Option 2",
            stock: 5,
            incompatibleOptions: [
                {
                    id: 1,
                    name: "Option 1",
                    stock: 10,
                    incompatibleOptions: []
                }
            ]
        },
        {
            id: 3,
            name: "Option 3",
            stock: 8,
            incompatibleOptions: [
                {
                    id: 1,
                    name: "Option 1",
                    stock: 10,
                    incompatibleOptions: []
                }
            ]
        },
        {
            id: 4,
            name: "Option 4",
            stock: 0,
            incompatibleOptions: []
        }
    ]
}
