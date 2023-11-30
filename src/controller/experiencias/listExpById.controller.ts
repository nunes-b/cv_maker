import { Request, Response } from "express";
import { listExpByIdService } from "../../service/experiencias/listaExpById.service";

async function listExpByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await listExpByIdService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha na listagem de experiência" });
  }
}

export { listExpByIdController };
