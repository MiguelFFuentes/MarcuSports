export class MissingProductOptionsError extends Error{
    constructor(productId: number, partId: number) {
        super(`Product ${productId} has a missing part ${partId} to be selected`)
    }
}