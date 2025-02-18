import {ProductDto} from "@productcatalog/application/dtos/ProductDto";
import request from "supertest";
import {getMockProductDtos} from "@helpers/productcatalog/ProductDtoHelper";
import app from "../../../app";

xdescribe('A User', () => {
    it('should retrieve a list of products', async () => {
        const expectedProducts: ProductDto[] = getMockProductDtos()

        const response = await request(app).get('/products')

        expect(response).toEqual(expectedProducts)
    })
})