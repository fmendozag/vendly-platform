import { Router } from "express";
import * as usersController from "./users.controller.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { validate } from "../../shared/middlewares/validate.middleware.js";
import { createUserSchema } from "./users.schema.js";

const router = Router();

router.get("/", asyncHandler(usersController.getUsers));

router.post(
  "/",
  validate(createUserSchema),
  asyncHandler(usersController.createUser)
);

export default router;