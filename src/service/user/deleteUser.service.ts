import UserByIdResponse from "../../interfaces/user/user-by-id.interface";
import { UserManager } from "../../model/user";

class DeleteUser {
  async deleteUser(id: string): Promise<UserByIdResponse | null> {
    try {
      const userManager = new UserManager("", "", "");
      const user = await userManager.deleteUser(id);

      if (!user) {
        throw new Error("Usuário não encontrado para o ID fornecido.");
      }

      return {
        statusCode: 203,
        body: user,
        message: "Usuário deletado com sucesso",
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Erro ao deletar usuário no serviço: " + error.message);
      } else {
        throw new Error("Erro desconhecido no serviço.");
      }
    }
  }
}

export { DeleteUser };
