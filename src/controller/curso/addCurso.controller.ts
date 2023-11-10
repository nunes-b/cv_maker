import { createCursoService } from "../../service/curso/createCurso.service";
import { Request, Response } from "express";
import CursoSchema from "../../interfaces/curso/curso.interface";

async function createCursoController(req: Request, res: Response) {
  try {
    const cursoData: CursoSchema = req.body;
    const response = await createCursoService(cursoData);

    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.error("Erro ao criar curso:", error);
    res.status(500).json({ message: "Falha ao criar curso" });
  }
}

export { createCursoController };
