import {ShoppingCartService} from "../application/services/ShoppingCartService";
import {NextFunction, Request, Response} from 'express'
import {CreateShoppingCartDto} from "../application/dtos/CreateShoppingCartDto";
import {MissingProductOptionsError} from "../domain/exceptions/MissingProductOptionsError";
import {OutOfStockError} from "../domain/exceptions/OutOfStockError";
import {IncompatibleOptionsError} from "../domain/exceptions/IncompatibleOptionsError";
import {DuplicatedPartError} from "../domain/exceptions/DuplicatedPartError";

export class ShoppingCartController {
    constructor(private shoppingCartService: ShoppingCartService) {
    }

    async createShoppingCart(req: Request<CreateShoppingCartDto>, res: Response, next: NextFunction) {
        try {
            const shoppingCart = await this.shoppingCartService.createShoppingCart(req.body)
            res.status(201).json(shoppingCart)
        } catch (error) {
            if (
                error instanceof MissingProductOptionsError ||
                error instanceof OutOfStockError ||
                error instanceof IncompatibleOptionsError ||
                error instanceof  DuplicatedPartError
            ) {
                res.status(400).json({error: error.message})
                return
            }
            console.error('Error in POST /shoppingcart:', error)
            next(error)
        }
    }
}