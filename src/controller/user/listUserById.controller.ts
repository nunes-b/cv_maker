import { Request, Response } from "express";
import { FindUserById } from "../../service/user/findUserById.service";

class FindUserByIdController {
  async listUser(id: string, req: Request, res: Response) {
    try {
      const listById = new FindUserById();
      const response = await listById.listUsers(id);
      if (response) {
        const responseBody = { ...response.body, message: response.message };
        res.status(response.statusCode).json(responseBody);
      } else {
        res.status(500).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuario" });
    }
  }
}

export { FindUserByIdController };
