import request from 'supertest';
import express from 'express';

const app = express();
app.get("/", (req, res) => {
    res.send("Hello world! This is MarkuSports.");
});

describe('GET /', () => {
    it('should return Hello world! This is MarkuSports.', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe("Hello world! This is MarkuSports.");
        expect(response.status).toBe(200);
    });
});