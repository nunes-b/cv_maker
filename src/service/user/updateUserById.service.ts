import UserByIdResponse from "../../interfaces/user/user-by-id.interface";
import EmailAlreadyExistsError from "../../errorHandling/errorHasEmail";
import { UserManager } from "../../model/user";
import bcrypt from "bcrypt";

class UpdateUserService {
  async updateUser(
    id: string,
    email: string,
    password: string
  ): Promise<UserByIdResponse | null> {
    try {
      const userManager = new UserManager(id, email, password);

      const hashedPassword = await bcrypt.hash(password, 10);
      userManager.setPassword(hashedPassword);

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
