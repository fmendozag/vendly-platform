import bcrypt from "bcrypt";
import { prisma } from "../../config/db.js";

export const getUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  });
};

export const createUser = async (data: {
  email: string;
  name?: string;
  password: string;
}) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashedPassword,
    },
  });
};