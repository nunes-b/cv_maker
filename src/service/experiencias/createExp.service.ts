import ExpSchema from "../../interfaces/experiencias/experiencias.interface";
import { makeExp } from "../../model/experiencia";

async function createExpService(data: ExpSchema) {
  try {
    const addExp = await makeExp(
      data.curriculoId,
      data.nomeEmpresa,
      data.periodoInicio,
      data.periodoFim,
      data.cargo,
      data.atividades
    );
    return {
      statusCode: 201,
      body: {
        data: addExp,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: {
        message: "Falha ao criar experiencia",
      },
    };
  }
}

export { createExpService };
