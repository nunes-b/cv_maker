import { Request, Response } from "express";
import { listCursoByIdService } from "../../service/curso/listCursoById.service";

async function listCursoByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await listCursoByIdService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha na listagem de cursos" });
  }
}

export { listCursoByIdController };
