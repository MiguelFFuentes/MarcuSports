import {CartProduct} from "@shoppingcart/domain/entities/CartProduct";
import {MissingProductOptionsError} from "@shoppingcart/domain/exceptions/MissingProductOptionsError";
import {CartPartId} from "@shoppingcart/domain/valueobjects/CartPartId";
import {getMockOptions} from "@helpers/shoppingcart/CartOptionHelper";
import {OutOfStockError} from "@shoppingcart/domain/exceptions/OutOfStockError";
import {IncompatibleOptionsError} from "@shoppingcart/domain/exceptions/IncompatibleOptionsError";

describe('CartProduct', () => {

    let cartProduct: CartProduct

    beforeEach(() => {
        const partIds: CartPartId[] = [
            {id: 1},
            {id: 2},
        ]
        cartProduct = new CartProduct(1, 'Test product', 'This is a test product', getMockOptions(), partIds)
    })
    it('should raise an error if every part is not selected', () => {
        cartProduct.selectOptions([1])
        expect(() => cartProduct.validate()).toThrow(MissingProductOptionsError)
    })

    it('should raise an error if a selected option has no stock', () => {
        cartProduct.selectOptions([1, 4])
        expect(() => cartProduct.validate()).toThrow(OutOfStockError)
    })

    it('should raise an error if some options are incompatible between each other', () => {
        cartProduct.selectOptions([1, 5])
        expect(() => cartProduct.validate()).toThrow(IncompatibleOptionsError)
    })

    it('should validate a product when everything is fine', () => {
        cartProduct.selectOptions([1, 3])
        expect(() => cartProduct.validate()).not.toThrow()
    })
})
