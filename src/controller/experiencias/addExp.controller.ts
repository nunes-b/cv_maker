import { Request, Response } from "express";
import ExpSchema from "../../interfaces/experiencias/experiencias.interface";
import { createExpService } from "../../service/experiencias/createExp.service";

async function createExpController(req: Request, res: Response) {
  try {
    const expData: ExpSchema = req.body;
    const response = await createExpService(expData);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar uma qualificação" });
  }
}
export { createExpController };
