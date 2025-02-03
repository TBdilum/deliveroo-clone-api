import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";    

const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next();
    } catch (error) {
        res.status(400).json({
            message : "Validation Error",
            errors : error,
        })
    }
}

export default validate;