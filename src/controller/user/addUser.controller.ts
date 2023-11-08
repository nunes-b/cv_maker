import { Request, Response } from "express";
import { createUserService } from "../../service/user/createUser.service";
import EmailAlreadyExistsError from "../../utils/errorHandling/errorHasEmail";

class AddUserControler {
  async createUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userService = new createUserService();
      const response = await userService.createUser(email, password);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      if (error instanceof EmailAlreadyExistsError) {
        console.error("Erro de e-mail já registrado:", error.message);
        res
          .status(400)
          .json({ message: "E-mail já registrado. Use um e-mail diferente." });
      } else {
        res.status(500).json({ message: "Erro ao criar o usuário." });
      }
    }
  }
}

export { AddUserControler };
