export class IncompatibleOptionsError extends Error {
    constructor(productId: number, optionId: number) {
        super(`Option ${optionId} from Product ${productId} is not compatible`)
    }
}