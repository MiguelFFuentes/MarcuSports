import express from "express";
import dotenv from "dotenv";
import productCatalogRouter from "./productcatalog/adapters/http/ProductCatalog.routes";
import errorHandler from "./core/ErrorHandling.middleware";
import cors from 'cors';
import shoppingCartRouter from "./shoppingcart/adapters/ShoppingCart.routes";

dotenv.config();

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routers
app.use('/products', productCatalogRouter)
app.use('/shoppingcart', shoppingCartRouter)

app.get("/", (req, res) => {
    res.send("Hello world! This is MarkuSports.")
})

// Error handling
app.use(errorHandler)

export default app
