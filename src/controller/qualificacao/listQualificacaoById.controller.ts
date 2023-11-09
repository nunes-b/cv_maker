import { Request, Response } from "express";
import { listQualificacaoByIdService } from "../../service/qualificacao/listQualificacaoById.service";

async function listQualificacao(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await listQualificacaoByIdService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({
      message: "Falha ao listar qualificações",
    });
  }
}

export { listQualificacao };
