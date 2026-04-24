import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./modules/users/users.routes.js";
import { errorMiddleware } from "./shared/middlewares/error.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", usersRoutes);

// 👇 SIEMPRE AL FINAL
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});