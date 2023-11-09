import { ListQualificacaoService } from "../../service/qualificacao/listQualificacao.service";
import { Request, Response } from "express";

async function listQualificacao(req: Request, res: Response) {
  try {
    const response = await ListQualificacaoService();
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({
      message: "Falha ao listar qualificações",
    });
  }
}

export { listQualificacao };
