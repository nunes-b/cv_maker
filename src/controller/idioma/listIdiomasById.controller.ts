import { Request, Response } from "express";
import { listIdiomaById } from "../../service/idioma/listIdiomaById.service";

async function listIdiomasByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await listIdiomaById(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha na listagem de idioma" });
  }
}

export { listIdiomasByIdController };
