import { Request, Response } from "express";
import { listExpsService } from "../../service/experiencias/listExp.service";

async function listExpController(req: Request, res: Response) {
  try {
    const response = await listExpsService();
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({
      message: "Falha ao listar experiencias",
    });
  }
}

export { listExpController };
