import { Request, Response } from "express";
import { deleteExpService } from "../../service/experiencias/deletedExp.service";

async function deletedExpController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await deleteExpService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar experiência." });
  }
}

export { deletedExpController };
