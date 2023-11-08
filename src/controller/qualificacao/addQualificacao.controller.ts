import { Request, Response } from "express";
import QualificacaoSchema from "../../interfaces/qualificacao/qualificacao.interface";
import { createQualificacaoService } from "../../service/qualificacao/createQualificacao.service";

async function createQualificacaoController(req: Request, res: Response) {
  try {
    const qualificacaoData: QualificacaoSchema = req.body;
    const response = await createQualificacaoService(qualificacaoData);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar uma qualificação" });
  }
}
export { createQualificacaoController };
