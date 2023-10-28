import prismaClient from "../utils/prisma-client";
import UserInterface from "../interfaces/user/user.interface";
import bcrypt from "bcrypt";

class UserManager {
  id: string;
  email: string;
  password: string;

  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  setPassword(password: string) {
    this.password = password;
  }

  public async checkPassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }

  public async createUser(): Promise<UserInterface> {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    const newUser = await prismaClient.user.create({
      data: {
        email: this.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    return newUser;
  }

  public async listUsers(): Promise<UserInterface[]> {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        email: true,
        password: false,
      },
    });
    return users;
  }

  public async findUserById(id: string): Promise<UserInterface | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        password: false,
      },
    });
    return user;
  }

  public async findUserByEmail(email: string): Promise<UserInterface | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        password: false,
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
      select: {
        id: true,
        email: true,
        password: false,
      },
    });
    return userUpdated;
  }

  public async deleteUser(id: string): Promise<UserInterface> {
    const deleteUser = await prismaClient.user.delete({
      where: { id: id },
      select: {
        id: true,
        email: true,
        password: false,
      },
    });
    return deleteUser;
  }
}

export { UserManager };
