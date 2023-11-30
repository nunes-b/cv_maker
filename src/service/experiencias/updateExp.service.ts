import { updateExp } from "../../model/experiencia";
import ExpSchema from "../../interfaces/experiencias/experiencias.interface";

async function updateExpService(id: string, data: ExpSchema) {
  try {
    const expToUpdate = await updateExp(id, data);
    return {
      statusCode: 200,
      body: {
        exp_atualizada: expToUpdate,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: {
        message: "Erro ao atualizar o experiência",
      },
    };
  }
}

export { updateExpService };
