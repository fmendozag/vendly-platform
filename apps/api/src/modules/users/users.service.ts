import { prisma } from "../../config/db.js";

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const createUser = async (data: {
  email: string;
  name?: string;
}) => {
  return prisma.user.create({
    data,
  });
};