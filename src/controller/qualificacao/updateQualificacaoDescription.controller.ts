import { updateQualificacaoService } from "../../service/qualificacao/updateQualificacaoDescription.service";
import { Request, Response } from "express";
import QualificacaoController from "../../interfaces/qualificacao/qualificacaoController.interface";

async function updateDescriptionQualificacao(req: Request, res: Response) {
  try {
    const { descricao, curriculoId } = req.body;
    const data: QualificacaoController = {
      curriculoId,
      descricao,
    };

    if (!data || !data.descricao) {
      const missingFields = [];
      if (!data.descricao) missingFields.push("nome");
      return res.status(400).json({
        message: `Dados insuficientes para atualização da sua descrição. Campos faltando: ${missingFields.join(
          ", "
        )}`,
      });
    }

    const response = await updateQualificacaoService(req.params.id, data);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha ao atualizar sua descrição" });
  }
}

export { updateDescriptionQualificacao };
