import { updateCV } from "../../model/curriculo";
import Curriculo from "../../interfaces/curriculo/curriculo.interface";

async function updateCvService(id: string, data: Curriculo) {
  try {
    const cvToUpdate = await updateCV(id, data);
    return {
      statusCode: 200,
      body: {
        curriculo_atualizado: cvToUpdate,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: {
        message: "Erro ao atualizar o currículo",
      },
    };
  }
}

export { updateCvService };
