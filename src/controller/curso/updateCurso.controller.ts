import { updateCursoService } from "../../service/curso/updateCurso.service";
import { Request, Response } from "express";

async function updateCursoController(req: Request, res: Response) {
  try {
    const { curriculoId, titulo, instituicao, local, data } = req.body;

    const contentToUpdate = {
      curriculoId,
      titulo,
      instituicao,
      local,
      data,
    };

    if (!contentToUpdate || !contentToUpdate.curriculoId) {
      const missingFields = [];
      if (!contentToUpdate.curriculoId) missingFields.push("CurriculoId");
      return res.status(400).json({
        message: `Dados insuficientes para atualizar seu curso, verifique o ${missingFields.join(
          ", "
        )}`,
      });
    }

    const response = await updateCursoService(req.params.id, contentToUpdate);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha ao atualizar o currículo" });
  }
}

export { updateCursoController };
