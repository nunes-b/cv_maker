import { Request, Response } from "express";
import { deleteQualificacaoService } from "../../service/qualificacao/deleteQualificacao.service";

async function deleteQualificacaoController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await deleteQualificacaoService(id);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar qualificação." });
  }
}

export { deleteQualificacaoController };
