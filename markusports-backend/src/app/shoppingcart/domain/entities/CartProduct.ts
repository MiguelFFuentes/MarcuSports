import {CartOption} from "./CartOption";
import {CartPartId} from "../valueobjects/CartPartId";
import {MissingProductOptionsError} from "../exceptions/MissingProductOptionsError";
import {OutOfStockError} from "../exceptions/OutOfStockError";
import {IncompatibleOptionsError} from "../exceptions/IncompatibleOptionsError";

export class CartProduct {

    private selectedOptions: CartOption[] = []

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public options: CartOption[],
        selectedOptions: CartOption[],
        public parts: CartPartId[],
        public image?: string
    ) {
        this.selectedOptions = selectedOptions
    }

    selectOptions(optionIds: number[]) {
        this.selectedOptions = [
            ...this.selectedOptions,
            ...this.options.filter(option => optionIds.includes(option.id))
        ]
    }

    validate() {
        this.validateAllPartsSelected()
        this.validateStock()
        this.validateIncompatibleOptions()
    }

    private validateAllPartsSelected() {
        const selectedOptionIds = this.selectedOptions.map(option => option.partId)
        this.parts.forEach(part => {
            if (!selectedOptionIds.includes(part.id)) {
                throw new MissingProductOptionsError(this.id, part.id)
            }
        })
    }

    private validateStock() {
        this.selectedOptions.forEach(option => {
            if (option.stock <= 0) {
                throw new OutOfStockError(this.id, option.id)
            }
        })
    }

    private validateIncompatibleOptions() {
        const incompatibleOptions = this.selectedOptions.flatMap(option => option.incompatibleOptions).map(option => option.id)
        this.selectedOptions.forEach(option => {
            if (incompatibleOptions.includes(option.id)) {
                throw new IncompatibleOptionsError(this.id, option.id)
            }
        })
    }

}