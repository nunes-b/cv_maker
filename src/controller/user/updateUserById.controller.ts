import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/updateUserById.service";

class UpdateUserController {
  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
      const userToUpdate = new UpdateUserService();
      const response = await userToUpdate.updateUser(id, email, password);
      if (response) {
        res.status(response.statusCode).json(response.body);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao atualizar o usuário" });
    }
  }
}

export { UpdateUserController };
