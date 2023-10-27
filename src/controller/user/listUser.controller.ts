import { Request, Response } from "express";
import { ListUserService } from "../../service/user/listUser.service";

class ListUserController {
  async listUser(req: Request, res: Response) {
    try {
      const listUserService = new ListUserService();
      const response = await listUserService.listUsers();
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o usuário." });
    }
  }
}

export { ListUserController };
