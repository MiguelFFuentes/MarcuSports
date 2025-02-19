import {CreateShoppingCartDto} from "@shoppingcart/application/dtos/CreateShoppingCartDto";

export function getMockCreateCartProductDto(): CreateShoppingCartDto {
    return {
        products: [
            {
                id: 1,
                selectedOptionsIds: [1, 3]
            },
            {
                id: 2,
                selectedOptionsIds: [1, 3]
            }
        ]
    }
}