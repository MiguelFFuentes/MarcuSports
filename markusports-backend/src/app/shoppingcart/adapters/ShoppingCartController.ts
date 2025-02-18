import {ShoppingCartService} from "../application/services/ShoppingCartService";
import {NextFunction, Request, Response} from 'express'

export class ShoppingCartController {
    constructor(private shoppingCartService: ShoppingCartService) {
    }

    async createShoppingCart(req: Request, res: Response, next: NextFunction) {
        try {
            const shoppingCart = await this.shoppingCartService.createShoppingCart();
            res.status(201).json(shoppingCart);
        } catch (error) {
            console.error('Error in POST /shoppingcart:', error);
            next(error);
        }
    }
}