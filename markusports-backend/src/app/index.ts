import express from "express";
import dotenv from "dotenv";
import productCatalogRouter from "./productcatalog/adapters/http/ProductCatalog.routes";
import errorHandler from "./core/ErrorHandling.middleware";

dotenv.config();

const app = express()

// Routers
app.use('/products', productCatalogRouter)

app.get("/", (req, res) => {
    res.send("Hello world! This is MarkuSports.")
})

// Middlewares
app.use(errorHandler)

export default app
