import errorHandler from "@core/ErrorHandling.middleware";
import {Request, Response, NextFunction} from "express";

describe('ErrorHandlingMiddleware', () => {

    it('should catch error and return 500 status code', async () => {
        const req = {} as Request
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as unknown as Response
        const next = jest.fn() as unknown as NextFunction
        const error = new Error('Test error')

        errorHandler(error, req, res, next)

        expect(res.status).toBeCalledWith(500)
        expect(res.json).toBeCalledWith({ message: 'Internal Server Error' })
    })

})