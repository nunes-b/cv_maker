import UserByIdResponse from "../../interfaces/user/user-by-id.interface";
import { UserManager } from "../../model/user";

class FindUserById {
  async listUsers(id: string): Promise<UserByIdResponse | null> {
    try {
      const userManager = new UserManager("", "", "");
      const user = await userManager.findUserById(id);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Erro ao listar usuário no serviço: " + error.message);
      } else {
        throw new Error("Erro desconhecido no serviço.");
      }
    }
  }
}

export { FindUserById };
