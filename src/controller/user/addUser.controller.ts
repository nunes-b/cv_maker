// controllers/userController.ts
import { Request, Response } from "express";
import { createUserInService } from "../../service/createUser.service";

async function createUserController(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const response = await createUserInService(email, password);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o usuario." });
  }
}

export { createUserController };
