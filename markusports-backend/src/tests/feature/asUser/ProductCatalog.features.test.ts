import {ProductDto} from "@productcatalog/application/dtos/ProductDto";
import app from "../../../app";
import request from "supertest";

describe('A User', () => {
    it('should retrieve a list of products', async () => {
        const expectedProducts: ProductDto[] = [
            {
                id: "1",
                name: "Test product",
                price: 29.99,
                description: "This is a product for testing"
            },
            {
                id: "2",
                name: "Another Test product",
                price: 19.99,
                description: "This is a product for testing"
            }
        ]

        const response = await request(app).get('/products');

        expect(response).toEqual(expectedProducts);
    })
});