import { CreateCurriculo } from "../../service/curriculo/createCurriculo.service";
import { Request, Response } from "express";
import Curriculo from "../../interfaces/curriculo/curriculo.interface";

async function createCurriculoController(req: Request, res: Response) {
  try {
    const curriculoData: Curriculo = req.body;
    const response = await CreateCurriculo(curriculoData);

    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.error("Erro ao criar curriculo:", error);
    res.status(500).json({ message: "Falha ao criar curriculo" });
  }
}

export { createCurriculoController };
