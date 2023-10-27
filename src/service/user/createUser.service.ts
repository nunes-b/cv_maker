import { UserManager } from "../../model/user";
import EmailAlreadyExistsError from "../../errorHandling/errorHasEmail";

class createUserService {
  async createUser(email: string, password: string) {
    try {
      const userManager = new UserManager("", email, password);
      const existingUser = await userManager.findUserByEmail(email);
      if (existingUser && existingUser.email === email) {
        throw new EmailAlreadyExistsError(
          "E-mail já existe. Por favor, use um e-mail diferente."
        );
      }
      const createdUser = await userManager.createUser();
      return {
        statusCode: 201,
        body: createdUser,
      };
    } catch (error) {
      if (error instanceof EmailAlreadyExistsError) {
        throw error;
      } else if (error instanceof Error) {
        throw new Error("Erro ao criar usuário no serviço: " + error.message);
      } else {
        throw new Error("Erro desconhecido no serviço.");
      }
    }
  }
}

export { createUserService };