import { listByIdCVService } from "../../service/curriculo/listCurriculoById.service";
import { Request, Response } from "express";

async function ListCvByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await listByIdCVService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Falha ao listar curriculo" });
  }
}

export { ListCvByIdController };
