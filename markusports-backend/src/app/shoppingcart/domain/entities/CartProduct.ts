import {CartOption} from "./CartOption";
import {CartPartId} from "../valueobjects/CartPartId";
import {MissingProductOptionsError} from "../exceptions/MissingProductOptionsError";
import {OutOfStockError} from "../exceptions/OutOfStockError";
import {IncompatibleOptionsError} from "../exceptions/IncompatibleOptionsError";
import {DuplicatedPartError} from "../exceptions/DuplicatedPartError";

export class CartProduct {

    private selectedOptions: CartOption[] = []

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public options: CartOption[],
        selectedOptions: CartOption[],
        public parts: CartPartId[],
        public image?: string
    ) {
        this.selectedOptions = selectedOptions
    }

    selectOptions(optionIds: number[]) {
        const newSelectedOptions = this.options.filter(option => optionIds.includes(option.id))
        newSelectedOptions.forEach(option => option.stock--)
        this.selectedOptions = [...this.selectedOptions, ...newSelectedOptions]
    }

    validate() {
        this.validateAllPartsSelected()
        this.validateDuplicatedParts()
        this.validateStock()
        this.validateIncompatibleOptions()
    }

    getSelectedOptions(): CartOption[] {
        // Returns a copy of the selected options to prevent mutation
        return [...this.selectedOptions]
    }

    private validateAllPartsSelected() {
        const selectedOptionIds = this.selectedOptions.map(option => option.partId)
        this.parts.forEach(part => {
            if (!selectedOptionIds.includes(part.id)) {
                throw new MissingProductOptionsError(this.id, part.id)
            }
        })
    }

    private validateDuplicatedParts() {
        const selectedPartIds = this.selectedOptions.map(option => option.partId)
        const duplicates = selectedPartIds.filter((partId, index) => selectedPartIds.indexOf(partId) !== index)
        if (duplicates.length > 0) {
            throw new DuplicatedPartError(this.id, duplicates)
        }

    }

    private validateStock() {
        this.selectedOptions.forEach(option => {
            if (option.stock < 0) {
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