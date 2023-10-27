import { Request, Response } from "express";
import { createUserService } from "../../service/user/createUser.service";

class AddUserControler {
  async createUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userService = new createUserService();
      const response = await userService.createUser(email, password);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o usuário." });
    }
  }
}

export { AddUserControler };
