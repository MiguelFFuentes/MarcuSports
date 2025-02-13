import { Request, Response, NextFunction } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({ message: 'Internal Server Error' });
}

export default errorHandler;