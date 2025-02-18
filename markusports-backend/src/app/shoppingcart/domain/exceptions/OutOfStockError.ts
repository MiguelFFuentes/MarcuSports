export class OutOfStockError extends Error {
    constructor(productId: number, optionId: number) {
        super(`Option ${optionId} from Product ${optionId} has run out of stock`)
    }
}