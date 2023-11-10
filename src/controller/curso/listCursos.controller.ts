import { Request, Response } from "express";
import { listCursosService } from "../../service/curso/listCursos.service";

async function listCursoController(req: Request, res: Response) {
  try {
    const response = await listCursosService();
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Falha na listagem de cursos" });
  }
}

export { listCursoController };
