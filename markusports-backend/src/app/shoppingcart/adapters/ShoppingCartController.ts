import {ShoppingCartService} from "../application/services/ShoppingCartService";
import {NextFunction, Request, Response} from 'express'
import {CreateShoppingCartDto} from "../application/dtos/CreateShoppingCartDto";

export class ShoppingCartController {
    constructor(private shoppingCartService: ShoppingCartService) {
    }

    async createShoppingCart(req: Request<CreateShoppingCartDto>, res: Response, next: NextFunction) {
        try {
            const shoppingCart = await this.shoppingCartService.createShoppingCart(req.body);
            res.status(201).json(shoppingCart);
        } catch (error) {
            console.error('Error in POST /shoppingcart:', error);
            next(error);
        }
    }
}