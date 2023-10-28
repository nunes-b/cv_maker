import { updateCvService } from "../../service/curriculo/updateCurriculo.service";
import { Request, Response } from "express";

async function updateCvController(req: Request, res: Response) {
  try {
    const {
      userId,
      nome,
      dataNascimento,
      telefone,
      perfilLinkedIn,
      cidade,
      areaAtuacao,
    } = req.body;
    const data = {
      userId,
      nome,
      dataNascimento,
      telefone,
      perfilLinkedIn,
      cidade,
      areaAtuacao,
    };

    if (!data || !data.nome || !data.dataNascimento) {
      const missingFields = [];
      if (!data.userId) missingFields.push("userId");
      if (!data.nome) missingFields.push("nome");
      if (!data.dataNascimento) missingFields.push("dataNascimento");
      return res.status(400).json({
        message: `Dados insuficientes para atualização do currículo. Campos faltando: ${missingFields.join(
          ", "
        )}`,
      });
    }

    const response = await updateCvService(req.params.id, data);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falha ao atualizar o currículo" });
  }
}

export { updateCvController };
