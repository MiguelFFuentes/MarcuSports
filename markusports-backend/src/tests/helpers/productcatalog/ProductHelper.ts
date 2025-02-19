import {Product} from "@productcatalog/domain/entities/Product";
import {ProductPartOption} from "@productcatalog/domain/entities/ProductPartOption";

export function getMockProducts(): Product[] {

    const [option1, option2] = getMockProductPartOptions()
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

function getMockProductPartOptions(): ProductPartOption[] {
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
                    incompatibleOptions: []
                },
                {
                    id: 3,
                    name: "Big size",
                    stock: 8,
                    incompatibleOptions: []
                }
            ]
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
                    incompatibleOptions: []
                }
            ]
        },
        {
            id: 3,
            name: "Big size",
            stock: 8,
            incompatibleOptions: [
                {
                    id: 1,
                    name: "Red color",
                    stock: 10,
                    incompatibleOptions: []
                }
            ]
        },
        {
            id: 4,
            name: "Small size",
            stock: 0,
            incompatibleOptions: []
        }
    ]
}
