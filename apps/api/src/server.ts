import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./modules/users/users.routes.js";
import authRoutes from "./modules/auth/auth.routes.js"
import { errorMiddleware } from "./shared/middlewares/error.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// 👇 SIEMPRE AL FINAL
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});