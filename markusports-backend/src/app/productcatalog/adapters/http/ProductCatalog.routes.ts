import {Router} from "express";
import {ProductCatalogController} from "./ProductCatalogController";
import {ProductCatalogService} from "../../application/services/ProductCatalogService";
import {PrismaProductCatalogRepository} from "../../infrastructure/repositories/PrismaProductCatalogRepository";

const productCatalogRouter = Router()
const productCatalogService = new ProductCatalogService(new PrismaProductCatalogRepository())
const productCatalogController = new ProductCatalogController(productCatalogService)


productCatalogRouter.get('/', productCatalogController.getProducts.bind(productCatalogController))

export default productCatalogRouter