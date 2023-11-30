import { updateIdioma } from "../../model/idioma";
import IdiomaSchema from "../../interfaces/idioma/idioma.interface";

async function updateIdiomaService(id: string, data: IdiomaSchema) {
  try {
    const idiomaUpdated = await updateIdioma(id, data);
    return {
      statusCode: 200,
      body: {
        idioma_atualizado: idiomaUpdated,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: {
        message: "Erro ao atualizar o idioma",
      },
    };
  }
}

export { updateIdiomaService };
