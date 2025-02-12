import express from "express";
import dotenv from "dotenv";
import productCatalogRouter from "./productcatalog/adapters/http/ProductCatalog.routes";

dotenv.config();

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world! This is MarkuSports.")
})

// Routers
app.use('/products', productCatalogRouter)


export default app
