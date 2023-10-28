import { Request, Response } from "express";
import { deleteCVService } from "../../service/curriculo/deleteCurriculo.service";

async function deleteCVController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await deleteCVService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar curriculo." });
  }
}

export { deleteCVController };
