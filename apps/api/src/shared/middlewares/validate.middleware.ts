import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) =>
  (req: Request & { validated?: any }, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      const error: any = new Error("Validation error");
      error.status = 400;
      error.details = result.error.flatten();
      throw error;
    }

    req.validated = result.data;

    next();
  };