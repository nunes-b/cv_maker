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

  public async createUser(): Promise<UserInterface> {
    const newUser = await prismaClient.user.create({
      data: {
        email: this.email,
        password: this.password,
      },
    });
    return newUser;
  }

  public async listUsers(): Promise<UserInterface[]> {
    const users = await prismaClient.user.findMany();
    return users;
  }

  public async findUserById(id: string): Promise<UserInterface | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }

  public async findUserByEmail(email: string): Promise<UserInterface | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }

  public async updateUser(): Promise<UserInterface> {
    const userUpdated = await prismaClient.user.update({
      where: { id: this.id },
      data: {
        email: this.email,
        password: this.password,
      },
    });
    return userUpdated;
  }
}

export { UserManager };
