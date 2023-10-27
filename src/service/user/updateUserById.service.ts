import UserByIdResponse from "../../interfaces/user/user-by-id.interface";
import EmailAlreadyExistsError from "../../errorHandling/errorHasEmail";
import { UserManager } from "../../model/user";

class UpdateUserService {
  async updateUser(
    id: string,
    email: string,
    password: string
  ): Promise<UserByIdResponse | null> {
    try {
      const userManager = new UserManager(id, email, password);

      const existingUser = await userManager.findUserByEmail(email);
      if (existingUser && existingUser.email === email) {
        throw new EmailAlreadyExistsError(
          "E-mail já existe. Por favor, use um e-mail diferente."
        );
      }

      const user = await userManager.updateUser();

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      if (error instanceof EmailAlreadyExistsError) {
        throw error;
      } else if (error instanceof Error) {
        throw new Error(
          "Erro ao atualizar o usuário no serviço: " + error.message
        );
      } else {
        throw new Error("Erro desconhecido no serviço.");
      }
    }
  }
}

export { UpdateUserService };
