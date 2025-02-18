import {Router} from "express";
import {ShoppingCartController} from "./ShoppingCartController";
import {ShoppingCartService} from "../application/services/ShoppingCartService";

const shoppingCartRouter = Router()

const shoppingCartService: ShoppingCartService = new ShoppingCartService()
const shoppingCartController: ShoppingCartController = new ShoppingCartController(shoppingCartService)

shoppingCartRouter.post('/', shoppingCartController.createShoppingCart.bind(shoppingCartController))
export default shoppingCartRouter