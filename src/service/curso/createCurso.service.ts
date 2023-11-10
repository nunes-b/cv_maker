import CursoSchema from "../../interfaces/curso/curso.interface";
import { makeCurso } from "../../model/curso";

async function createCursoService(data: CursoSchema) {
  try {
    const newCurso = await makeCurso(
      data.curriculoId,
      data.titulo,
      data.instituicao,
      data.local,
      data.data
    );
    return {
      statusCode: 201,
      body: {
        curso: newCurso,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: {
        message: "Falha ao criar curso",
      },
    };
  }
}

export { createCursoService };
