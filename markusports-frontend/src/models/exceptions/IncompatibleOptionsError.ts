export class IncompatibleOptionsError extends Error {
    constructor(public optionId: number) {
        super(`OptionId ${optionId} is not compatible`)
    }

}
