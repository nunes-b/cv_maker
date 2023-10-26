import prismaClient from "../utils/prisma-client";

interface User {
  id: string;
  email: string;
  password: string;
}

async function createUser(email: string, password: string): Promise<User> {
  const newUser = await prismaClient.user.create({
    data: {
      email: email,
      password: password,
    },
  });
  return newUser;
}

export { createUser };
