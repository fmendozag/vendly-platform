import { Request, Response } from "express";
import * as userService from "./users.service.js";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const createUser = async (
  req: Request & { validated?: any },
  res: Response
) => {
  const { body } = req.validated!;

  const user = await userService.createUser(body);
  res.status(201).json(user);
};