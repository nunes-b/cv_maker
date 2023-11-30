import ExpSchema from "../../interfaces/experiencias/experiencias.interface";
import { updateExpService } from "../../service/experiencias/updateExp.service";
import { Request, Response } from "express";

async function updateCursoController(req: Request, res: Response) {
  try {
    const {
      curriculoId,
      nomeEmpresa,
      cargo,
      periodoInicio,
      periodoFim,
      atividades,
    } = req.body;

    const contentToUpdate: ExpSchema = {
      curriculoId,
      nomeEmpresa,
      cargo,
      periodoInicio,
      periodoFim,
      atividades,
    };

    if (!contentToUpdate || !contentToUpdate.curriculoId) {
      const missingFields = [];
      if (!contentToUpdate.curriculoId) missingFields.push("CurriculoId");
      return res.status(400).json({
        message: `Dados insuficientes para atualizar sua experiência, verifique o ${missingFields.join(
          ", "
        )}`,
      });
    }

    const response = await updateExpService(req.params.id, contentToUpdate);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha ao atualizar a sua experiência" });
  }
}

export { updateCursoController };
