import {Router} from "express";
import {ProductCatalogController} from "./ProductCatalogController";
import {ProductCatalogService} from "../../application/services/ProductCatalogService";

const productCatalogRouter = Router()
const productCatalogService = new ProductCatalogService()
const productCatalogController = new ProductCatalogController(productCatalogService)


productCatalogRouter.get('/', productCatalogController.getProducts.bind(productCatalogController))

export default productCatalogRouter