import {ShoppingCartService} from "../application/services/ShoppingCartService";
import {NextFunction, Request, Response} from 'express'
import {CreateShoppingCartDto} from "../application/dtos/CreateShoppingCartDto";
import {MissingProductOptionsError} from "../domain/exceptions/MissingProductOptionsError";
import {OutOfStockError} from "../domain/exceptions/OutOfStockError";
import {IncompatibleOptionsError} from "../domain/exceptions/IncompatibleOptionsError";
import {DuplicatedPartError} from "../domain/exceptions/DuplicatedPartError";
import {ShoppingCartNotFoundError} from "../domain/exceptions/ShoppingCartNotFoundError";

export class ShoppingCartController {
    constructor(private shoppingCartService: ShoppingCartService) {
    }

    async createShoppingCart(req: Request<CreateShoppingCartDto>, res: Response, next: NextFunction) {
        try {
            const shoppingCart = await this.shoppingCartService.createShoppingCart(req.body)
            res.status(201).json(shoppingCart)
        } catch (error) {
            if (this.checkShoppingCartValidationError(res, error)) {
                return
            }
            console.error('Error in POST /shoppingcarts:', error)
            next(error)
        }
    }

    async getShoppingCart(req: Request, res: Response, next: NextFunction) {
        try {
            const shoppingCartId = parseInt(req.params.id)
            const shoppingCart = await this.shoppingCartService.getShoppingCart(shoppingCartId)
            res.json(shoppingCart)
        } catch (error) {
            if (error instanceof ShoppingCartNotFoundError) {
                res.status(404).json({error: error.message})
                return
            }
            console.error('Error in GET /shoppingcarts/:id:', error)
            next(error)
        }
    }

    async updateShoppingCart(req: Request, res: Response, next: NextFunction) {
        try {
            const shoppingCartId = parseInt(req.params.id)
            const shoppingCart = await this.shoppingCartService.updateShoppingCart(shoppingCartId, req.body)
            res.json(shoppingCart)
        } catch (error) {
            if (error instanceof ShoppingCartNotFoundError) {
                res.status(404).json({error: error.message})
                return
            }
            if (this.checkShoppingCartValidationError(res, error)) {
                return
            }
            console.error('Error in PUT /shoppingcarts/:id:', error)
            next(error)
        }
    }

    private checkShoppingCartValidationError(res: Response, error: unknown) {
        if (
            error instanceof MissingProductOptionsError ||
            error instanceof OutOfStockError ||
            error instanceof DuplicatedPartError
        ) {
            res.status(400).json({error: error.message})
            return true
        }
        if (error instanceof IncompatibleOptionsError) {
            res.status(400).json({error: error.message, optionId: error.optionId})
            return true
        }
        return false
    }

}