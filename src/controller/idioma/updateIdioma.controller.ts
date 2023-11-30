import IdiomaSchema from "../../interfaces/idioma/idioma.interface";
import { updateIdiomaService } from "../../service/idioma/updateIdioma.service";
import { Request, Response } from "express";

async function updateIdiomaController(req: Request, res: Response) {
  try {
    const { curriculoId, nome, nivel } = req.body;

    const contentToUpdate: IdiomaSchema = {
      curriculoId,
      nome,
      nivel,
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

    const response = await updateIdiomaService(req.params.id, contentToUpdate);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha ao atualizar o Idioma" });
  }
}

export { updateIdiomaController };
