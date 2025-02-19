export class ShoppingCartNotFoundError extends Error {
    constructor(id: number) {
        super(`Shopping cart with id ${id} not found`)
    }
}