import { Request, Response } from "express";
import { DeleteUser } from "../../service/user/deleteUser.service";

class DeleteUserController {
  async DeleteUser(id: string, req: Request, res: Response) {
    try {
      const deleteUser = new DeleteUser();
      const response = await deleteUser.deleteUser(id);
      if (response) {
        res.status(response.statusCode).json(response.body);
      } else {
        res.status(500).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuario" });
    }
  }
}

export { DeleteUserController };
