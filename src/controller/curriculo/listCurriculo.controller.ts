import { ListCVService } from "../../service/curriculo/listCurriculo.service";
import { Request, Response } from "express";

async function ListCurriculoController(req: Request, res: Response) {
  try {
    const response = await ListCVService();
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Falha na listagem de curriculos" });
  }
}

export { ListCurriculoController };
