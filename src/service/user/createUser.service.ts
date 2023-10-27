import { UserManager } from "../../model/user";

class createUserService {
  async createUser(email: string, password: string) {
    try {
      const userManager = new UserManager("", email, password);
      const createdUser = await userManager.createUser();
      return {
        statusCode: 201,
        body: createdUser,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Erro ao criar usuário no serviço: " + error.message);
      } else {
        throw new Error("Erro desconhecido no serviço.");
      }
    }
  }
}

export { createUserService };
