import IdiomaSchema from "../../interfaces/idioma/idioma.interface";
import { makeAidioma } from "../../model/idioma";

async function createIdioma(data: IdiomaSchema) {
  try {
    const addIdioma = await makeAidioma(
      data.nome,
      data.curriculoId,
      data.nivel
    );
    return {
      statusCode: 201,
      body: {
        Idioma: addIdioma,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: {
        message: "Falha ao criar Idioma",
      },
    };
  }
}

export { createIdioma };
