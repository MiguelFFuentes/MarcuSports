import {Router} from "express";
import {ShoppingCartController} from "./ShoppingCartController";
import {ShoppingCartService} from "../application/services/ShoppingCartService";
import {ShoppingCartRepository} from "../domain/repositories/ShoppingCartRepository";
import {PrismaShoppingCartRepository} from "../infrastructure/repositories/PrismaShoppingCartRepository";
import {ShoppingCartProductRepository} from "../domain/repositories/ShoppingCartProductRepository";
import {PrismaShoppingCartProductRepository} from "../infrastructure/repositories/PrismaShoppingCartProductRepository";

const shoppingCartRouter = Router()

const shoppingCartRepository: ShoppingCartRepository = new PrismaShoppingCartRepository()
const productRepository: ShoppingCartProductRepository = new PrismaShoppingCartProductRepository()
const shoppingCartService: ShoppingCartService = new ShoppingCartService(shoppingCartRepository, productRepository)
const shoppingCartController: ShoppingCartController = new ShoppingCartController(shoppingCartService)

shoppingCartRouter.post('/', shoppingCartController.createShoppingCart.bind(shoppingCartController))
shoppingCartRouter.get('/:id', shoppingCartController.getShoppingCart.bind(shoppingCartController))
shoppingCartRouter.put('/:id', shoppingCartController.updateShoppingCart.bind(shoppingCartController))
export default shoppingCartRouter