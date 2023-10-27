import UserServiceResponse from "../../interfaces/user/user-service-response.interface";
import { UserManager } from "../../model/user";

class ListUserService {
  async listUsers(): Promise<UserServiceResponse> {
    try {
      const userManager = new UserManager("", "", "");
      const users = await userManager.listUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Erro ao listar usuários no serviço: " + error.message);
      } else {
        throw new Error("Erro desconhecido no serviço.");
      }
    }
  }
}

export { ListUserService };
