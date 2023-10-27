import prismaClient from "../utils/prisma-client";
import UserInterface from "../interfaces/user/user.interface";

class UserManager implements UserInterface {
  id: string;
  email: string;
  password: string;

  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  async createUser(): Promise<UserInterface> {
    const newUser = await prismaClient.user.create({
      data: {
        email: this.email,
        password: this.password,
      },
    });
    return newUser;
  }

  async listUsers(): Promise<UserInterface[]> {
    const users = await prismaClient.user.findMany();
    return users;
  }
}

export { UserManager };
