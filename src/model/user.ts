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
      const userManager = new UserManager(id, email, "");

      const existingUser = await userManager.findUserByEmail(email);
      if (!existingUser) {
        throw new Error("Usuário não encontrado.");
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordValid) {
        console.log("Senha fornecida:", password);
        console.log("Senha armazenada:", existingUser.password);
        throw new Error("Senha fornecida não corresponde à senha armazenada.");
      }

      if (email !== existingUser.email) {
        existingUser.email = email;
      }

      await userManager.updateUser();

      return {
        statusCode: 200,
        body: existingUser,
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
