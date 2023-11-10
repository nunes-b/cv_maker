import { Request, Response } from "express";
import { deleteCursoService } from "../../service/curso/deleteCurso.service";

async function deleteCursoController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await deleteCursoService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar curso." });
  }
}

export { deleteCursoController };
