import {Router} from "express";
import {ProductCatalogController} from "./ProductCatalogController";

const productCatalogRouter = Router();
const productCatalogController = new ProductCatalogController();


productCatalogRouter.get('/', productCatalogController.getProducts.bind(productCatalogController));

export default productCatalogRouter;