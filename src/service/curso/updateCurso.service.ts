import { updateCurso } from "../../model/curso";
import CursoSchema from "../../interfaces/curso/curso.interface";

async function updateCursoService(id: string, data: CursoSchema) {
  try {
    const cursoToUpdate = await updateCurso(id, data);
    return {
      statusCode: 200,
      body: {
        curso_atualizado: cursoToUpdate,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: {
        message: "Erro ao atualizar o curso",
      },
    };
  }
}

export { updateCursoService };
