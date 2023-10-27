import { Request, Response } from "express";
import { UserService } from "../../service/createUser.service";

class UserController {
  async createUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userService = new UserService();
      const response = await userService.createUser(email, password);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o usuário." });
    }
  }
}

export { UserController };
