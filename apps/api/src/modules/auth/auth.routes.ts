import { Router } from "express";
import { login } from "./auth.controller.js";
import { loginSchema } from "./auth.schema.js";
import { validate } from "../../shared/middlewares/validate.middleware.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";

const router = Router();

router.post(
  "/login",
  validate(loginSchema),
  asyncHandler(login)
);

export default router;