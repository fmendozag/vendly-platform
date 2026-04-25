import { Request, Response } from "express";
import * as authService from "./auth.service.js";

export const login = async (
  req: Request & { validated?: any },
  res: Response
) => {
  const { email, password } = req.validated!.body;

  const result = await authService.loginUser(email, password);

  res.json(result);
};