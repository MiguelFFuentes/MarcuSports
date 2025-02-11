import request from 'supertest';
import app from "../app";

describe('GET /', () => {
    it('should return Hello world! This is MarkuSports.', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe("Hello world! This is MarkuSports.");
        expect(response.status).toBe(200);
    });
});