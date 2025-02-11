import express from "express";
import dotenv from "dotenv";
import productCatalogRouter from "./productcatalog/adapters/http/ProductCatalog.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world! This is MarkuSports.");
});

// Routers
app.use('/products', productCatalogRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
