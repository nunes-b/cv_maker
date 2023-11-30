import { Request, Response } from "express";
import { deleteIdiomaService } from "../../service/idioma/deleteIdioma.service";

async function deleteIdiomaController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await deleteIdiomaService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar idioma." });
  }
}

export { deleteIdiomaController };
