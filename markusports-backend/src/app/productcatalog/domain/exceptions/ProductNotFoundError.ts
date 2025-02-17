export class ProductNotFoundError extends Error {
    constructor(id: number) {
        super(`Product with id ${id} not found`);
    }
}