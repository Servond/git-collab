import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findUser = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (err) {
    throw err;
  }
};

export { findUser };
