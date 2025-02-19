export class DuplicatedPartError extends Error {
    constructor(productId: number, duplicatedPartIds: number[]) {
        super(`Product ${productId} has duplicated parts ${duplicatedPartIds.join(', ')}`)
    }
}