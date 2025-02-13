import {Router} from "express";
import {ProductCatalogController} from "./ProductCatalogController";
import {ProductCatalogService} from "../../application/services/ProductCatalogService";
import {PrismaProductCatalogRepository} from "../../infrastructure/repositories/PrismaProductCatalogRepository";
import {ProductCatalogRepository} from "../../domain/repositories/ProductCatalogRepository";

const productCatalogRouter = Router()
const productCatalogRepository: ProductCatalogRepository = new PrismaProductCatalogRepository()
const productCatalogService: ProductCatalogService = new ProductCatalogService(productCatalogRepository)
const productCatalogController: ProductCatalogController = new ProductCatalogController(productCatalogService)


productCatalogRouter.get('/', productCatalogController.getProducts.bind(productCatalogController))

export default productCatalogRouter