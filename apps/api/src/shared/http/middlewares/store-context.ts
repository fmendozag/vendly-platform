import { Request, Response, NextFunction } from "express";

export interface StoreRequest extends Request {
  storeId?: string;
}

export const storeContextMiddleware = (
  req: StoreRequest,
  res: Response,
  next: NextFunction
) => {
  const storeId = req.headers["x-store-id"] as string;

  if (!storeId) {
    return res.status(400).json({
      error: "Missing x-store-id header",
    });
  }

  req.storeId = storeId;
  next();
};