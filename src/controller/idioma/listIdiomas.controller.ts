import { Request, Response } from "express";
import { listIdiomasService } from "../../service/idioma/listAllIdiomas.service";

async function listIdiomasController(req: Request, res: Response) {
  try {
    const response = await listIdiomasService();
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({
      message: "Falha ao listar os idiomas",
    });
  }
}

export { listIdiomasController };
